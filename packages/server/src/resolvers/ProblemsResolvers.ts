import { Arg, Mutation, Resolver } from 'type-graphql';
import { getConnection } from 'typeorm';
import { Problem } from '../entity/Problems';
import { ProblemsArgs } from '../types/graphql/inputs/ProblemsArgs';

@Resolver()
export class ProblemsResolvers {
  @Mutation(() => Problem)
  async createProblem(@Arg('options') options: ProblemsArgs) {
    const lastProblem = await getConnection().query(
      `
      select MAX(index) from problems
      where id = $1
    `,
      [options.contestId]
    );

    console.log('LAST PROBLEM: ', lastProblem);
  }
}
