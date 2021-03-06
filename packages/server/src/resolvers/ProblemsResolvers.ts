import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql';
import { getConnection } from 'typeorm';
import { contest_session_prefix } from '../constants';
import { Contest } from '../entity/Contest';
import { Problem } from '../entity/Problems';
import { ShortAnswer } from '../entity/ShortAnswer';
import { isAuth } from '../middlewares/isAuth';
import { ProblemQuery } from '../types/graphql/inputs/ProblemQuery';
import { ProblemsArgs } from '../types/graphql/inputs/ProblemsArgs';
import { MyContext } from '../types/MyContext';
import { contestInSession } from '../utils/contestInSession';
import { isMember } from '../utils/isMember';
import { isOwner } from '../utils/isOwner';

@Resolver()
export class ProblemsResolvers {
  @Mutation(() => Problem)
  async createShortAnswer(
    @Arg('options') options: ProblemsArgs,
    @Ctx() { req }: MyContext
  ): Promise<Problem> {
    await isOwner(options.contestId, req);

    const shortAnswer = await ShortAnswer.create({
      question: options.question,
      answer: options.answer,
      solution: options.solution,
      contestId: options.contestId,
    }).save();

    console.log(shortAnswer);

    const result = await Problem.create({
      points: options.points,
      contestId: options.contestId,
      shortAnswerId: shortAnswer.id,
    }).save();

    const problem = await getConnection().query(
      `
      select p.*,
      json_build_object(
        'id', s.id,
        'question', s.question,
        'solution', s.solution,
        'answer', s.answer
      ) "shortAnswer"
      from problems p
      left join shortanswers s on p."shortAnswerId" = s."id" 
      where p."id" = $1
    `,
      [result.id]
    );

    console.log(problem);

    return problem[0];
  }

  @Mutation(() => Boolean)
  async updateShortAnswer(
    @Arg('problems', () => [ProblemQuery]) problems: Problem[],
    @Ctx() { req }: MyContext
  ) {
    await isOwner(problems[0].contestId, req);
    problems.forEach(async (problem) => {
      if (problem.shortAnswer && problem.shortAnswerId) {
        await getConnection().query(
          `
            update problems
            set points = $1
            where "id" = $2;
          `,
          [problem.points, problem.id]
        );
        await ShortAnswer.update(problem.shortAnswerId, problem.shortAnswer);
      } else {
      }
    });
    return true;
  }

  @Mutation(() => Boolean)
  async deleteProblem(@Arg('id') id: number, @Ctx() { req }: MyContext) {
    const problem = await Problem.findOne({ where: { id } });
    if (!problem) {
      throw new Error('Problem not found');
    }
    await isOwner(problem.contestId, req);
    await Problem.delete(id);
    console.log(problem);
    await ShortAnswer.delete(problem.shortAnswerId!);
    return true;
  }

  @Query(() => [Problem])
  @UseMiddleware(isAuth)
  async findProblems(
    @Arg('contestId') contestId: string,
    @Ctx() { req, redis }: MyContext
  ) {
    const contest = await Contest.findOne(contestId);

    if (!contest) {
      throw new Error("Contest doesn't exist");
    }

    if (contestInSession(contest)) {
      try {
        await isOwner(contestId, req);
      } catch (error) {
        await isMember(contestId, req);

        const userSession = await redis.get(
          contest_session_prefix + contestId + req.session.userId
        );

        if (!userSession) {
          throw new Error("User hasn't started the contest");
        }
      }
    } else {
      await isOwner(contestId, req);
    }

    const query = await getConnection().query(
      `
      select p.*,
      json_build_object(
        'id', s.id,
        'question', s.question,
        'solution', s.solution,
        'answer', s.answer,
        'contestId', s."contestId"
      ) "shortAnswer"
      from problems p
      left join shortanswers s on p."shortAnswerId" = s."id" 
      where p."contestId" = $1
      order by p."id"
    `,
      [contestId]
    );
    return query;
  }
}
