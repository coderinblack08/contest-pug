import {
  Arg,
  Ctx,
  Field,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import { getConnection } from 'typeorm';
import {
  contest_session_prefix,
  contest_submission_prefix,
} from '../constants';
import { Answer } from '../entity/Answer';
import { Contest } from '../entity/Contest';
import { Score } from '../entity/Score';
import { AnswerArgs } from '../types/graphql/inputs/AnswerArgs';
import { MyContext } from '../types/MyContext';
import { contestInSession } from '../utils/contestInSession';
import { isMember } from '../utils/isMember';

@ObjectType()
class ScoreResponse {
  @Field() total!: number;
  @Field() scored!: number;
  @Field() contest!: Contest;
}

@Resolver()
export class AnswersResolver {
  @Query(() => Int)
  async getScore(
    @Arg('contestId') contestId: string
    // @Ctx() { req, redis }: MyContext
  ) {
    const contest = await Contest.findOne(contestId);
    if (!contest) {
      throw new Error("Contest doesn't exist");
    }
  }

  @Query(() => [ScoreResponse])
  async findScores(@Ctx() { req }: MyContext) {
    const scores = await Score.find({
      where: { userId: req.session.userId },
      order: { createdAt: 'DESC' },
      relations: ['contest'],
    });
    return scores;
  }

  @Query(() => Boolean)
  async hasSubmitted(
    @Arg('contestId') contestId: string,
    @Ctx() { req, redis }: MyContext
  ) {
    const contest = await Contest.findOne(contestId);
    if (!contest) {
      throw new Error("Contest doesn't exist");
    }
    const submission = await redis.get(
      contest_submission_prefix + contestId + req.session.userId
    );

    if (!submission) {
      return false;
    }

    if (submission.startsWith('FINSIHED:')) {
      return true;
    }

    return (
      new Date(submission).getTime() + contest.length * 60 * 1000 <
      new Date().getTime()
    );
  }

  @Mutation(() => Boolean)
  async removeSession(
    @Arg('contestId') contestId: string,
    @Ctx() { req, redis }: MyContext
  ) {
    await redis.del(contest_submission_prefix + contestId + req.session.userId);
    await redis.del(contest_session_prefix + contestId + req.session.userId);
    return true;
  }

  @Query(() => String, { nullable: true })
  async fetchSession(
    @Arg('contestId') contestId: string,
    @Ctx() { req, redis }: MyContext
  ) {
    return await redis.get(
      contest_session_prefix + contestId + req.session.userId
    );
  }

  @Mutation(() => Boolean)
  async startSession(
    @Arg('contestId') contestId: string,
    @Ctx() { req, redis }: MyContext
  ) {
    await isMember(contestId, req);
    const contest = await Contest.findOne(contestId);

    if (!contest) {
      throw new Error("Contest doesn't exist");
    }

    if (!contestInSession(contest)) {
      throw new Error('Contest not currently in session!');
    }

    const hasSubmitted = await redis.get(
      contest_submission_prefix + contestId + req.session.userId
    );

    if (hasSubmitted) {
      throw new Error('User already submitted');
    }

    const hasSession = await redis.get(
      contest_session_prefix + contestId + req.session.userId
    );

    if (hasSession) {
      throw new Error('Session already started');
    }

    await redis.set(
      contest_session_prefix + contestId + req.session.userId,
      new Date().toString(),
      'ex',
      60 * contest.length + 1 // add extra second for latency and frontend delay
    );

    await redis.set(
      contest_submission_prefix + contestId + req.session.userId,
      new Date(new Date().getTime() + contest.length * 60).toISOString()
    );

    return true;
  }

  @Mutation(() => Int)
  async submitAnswers(
    @Arg('options', () => AnswerArgs) options: AnswerArgs,
    @Ctx() { req, redis }: MyContext
  ) {
    const { contestId } = options;
    const contest = await Contest.findOne(contestId);

    if (!contest) {
      throw new Error("Contest doesn't exist");
    }

    const hasSession = await redis.get(
      contest_session_prefix + contestId + req.session.userId
    );

    if (!hasSession) {
      throw new Error("Session wasn't started or was already ended");
    }

    if (contestInSession(contest)) {
      const queriesArray = options.answers.map((answer) => answer.problemId);

      const problems = await getConnection().query(
        `
        select p.id, p.points, s.answer from problems p  
        inner join shortanswers s on s.id = p."shortAnswerId"  
        where p."id" = ANY($1) 
        order by p."id" ASC
      `,
        [queriesArray]
      );

      console.log('PROBLEMS: ' + JSON.stringify(problems));

      let scoredPoints = 0,
        totalPoints = 0;

      problems.forEach(async (problem: any, index: number) => {
        const answer = options.answers[index];
        let points = 0;

        if (problem.answer === answer.answer) {
          scoredPoints += problem.points;
          points = problem.points;
        }

        totalPoints += problem.points;

        console.log('POINTS: ' + points);

        await Answer.create({
          points,
          contestId,
          answer: answer.answer,
          problemId: problem.id,
          userId: req.session.userId,
        }).save();
      });

      await Score.create({
        contestId,
        total: totalPoints,
        scored: scoredPoints,
        userId: req.session.userId,
      }).save();

      await redis.set(
        contest_submission_prefix + contestId + req.session.userId,
        'FINSIHED:' + new Date().toISOString()
      );

      await redis.del(contest_session_prefix + contestId + req.session.userId);

      console.log(`🎉 ${scoredPoints} / ${totalPoints}, Good Job 👍!`);

      return scoredPoints;
    } else {
      throw new Error('Contest not in session');
    }
  }
}
