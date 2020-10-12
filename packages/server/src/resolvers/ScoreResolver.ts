import { Arg, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';
import { getConnection } from 'typeorm';
import { contest_session_prefix } from '../constants';
import { Answer } from '../entity/Answer';
import { Contest } from '../entity/Contest';
import { AnswerArgs } from '../types/graphql/inputs/AnswerArgs';
import { MyContext } from '../types/MyContext';
import { contestInSession } from '../utils/contestInSession';
import { isMember } from '../utils/isMember';

@Resolver()
export class AnswersResolver {
  @Query(() => Boolean)
  async hasSubmitted(
    @Arg('contestId') contestId: string,
    @Ctx() { req }: MyContext
  ) {
    const hasAnswers = await Answer.find({
      contestId,
      userId: req.session.userId,
    });

    if (hasAnswers.length > 0) {
      return true;
    }

    return false;
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

    const hasAnswers = await Answer.find({
      contestId,
      userId: req.session.userId,
    });

    if (hasAnswers.length > 0) {
      throw new Error('You already submitted to the contest!');
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
      1000 * (60 * contest.length + 1) // add extra second for latency and frontend delay
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

        if (problem.answer === answer.answer) {
          scoredPoints += problem.points;
        }

        totalPoints += problem.points;

        await Answer.create({
          contestId,
          answer: answer.answer,
          problemId: problem.id,
          userId: req.session.userId,
        }).save();

        await redis.del(
          contest_session_prefix + contestId + req.session.userId
        );
      });

      console.log(`🎉 ${scoredPoints} / ${totalPoints}, Good Job 👍!`);

      return scoredPoints;
    } else {
      throw new Error('Contest not in session');
    }
  }
}
