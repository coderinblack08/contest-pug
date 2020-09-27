import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { Contest } from '../entity/Contest';
import { ContestResponse } from '../types/graphql/ContestResponse';
import { ContestArgs } from '../types/graphql/inputs/ContestArgs';
import { MyContext } from '../types/MyContext';

@Resolver()
export class ContestResolver {
  @Mutation(() => ContestResponse)
  async createContest(
    @Arg('options') options: ContestArgs,
    @Ctx() { req }: MyContext
  ): Promise<ContestResponse> {
    const contest = await Contest.create({
      ...options,
      creatorId: req.session.userId,
    }).save();
    return { contest };
  }
}
