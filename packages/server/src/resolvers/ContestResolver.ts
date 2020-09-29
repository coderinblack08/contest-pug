import { contestSchema } from '@contest-pug/common';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { Contest } from '../entity/Contest';
import { ContestResponse } from '../types/graphql/ContestResponse';
import { ContestArgs } from '../types/graphql/inputs/ContestArgs';
import { MyContext } from '../types/MyContext';
import { parseYupErrors } from '../utils/parseYupErrors';

@Resolver()
export class ContestResolver {
  @Mutation(() => ContestResponse)
  async createContest(
    @Arg('options') options: ContestArgs,
    @Ctx() { req }: MyContext
  ): Promise<ContestResponse> {
    try {
      await contestSchema.validate(options);
    } catch (error) {
      return { errors: [parseYupErrors(error)] };
    }
    const contest = await Contest.create({
      ...options,
      userId: req.session.userId,
    }).save();
    return { contest };
  }
}
