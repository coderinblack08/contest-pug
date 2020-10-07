import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { getConnection } from 'typeorm';
import { Problem } from '../entity/Problems';
import { ShortAnswer } from '../entity/ShortAnswer';
import { ProblemQuery } from '../types/graphql/inputs/ProblemQuery';
import { ProblemsArgs } from '../types/graphql/inputs/ProblemsArgs';
import { MyContext } from '../types/MyContext';
import { isOwner } from '../utils/isOwner';

@Resolver()
export class ProblemsResolvers {
  @Mutation(() => Problem)
  async createShortAnswer(
    @Arg('options') options: ProblemsArgs,
    @Ctx() { req }: MyContext
  ): Promise<Problem> {
    isOwner(options.contestId, req);

    const shortAnswer = await ShortAnswer.create({
      question: options.question,
      answer: options.answer,
      solution: options.solution,
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
    isOwner(problems[0].contestId, req);
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
    isOwner(problem.contestId, req);
    await Problem.delete(id);
    console.log(problem);
    await ShortAnswer.delete(problem.shortAnswerId!);
    return true;
  }

  @Query(() => [Problem])
  async findProblems(@Arg('contestId') contestId: string) {
    const query = await getConnection().query(
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
      where p."contestId" = $1
      order by p."id"
    `,
      [contestId]
    );
    return query;
  }
}
