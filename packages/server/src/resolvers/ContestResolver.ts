import { contestSchema } from '@contest-pug/common';
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql';
import { getConnection } from 'typeorm';
import { Contest } from '../entity/Contest';
import { isAuth } from '../middlewares/isAuth';
import { ContestResponse } from '../types/graphql/ContestResponse';
import { ContestArgs } from '../types/graphql/inputs/ContestArgs';
import { PaginationArgs } from '../types/graphql/inputs/PaginationArgs';
import { MyContext } from '../types/MyContext';
import { parseYupErrors } from '../utils/parseYupErrors';

@Resolver()
export class ContestResolver {
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async starContest(
    @Arg('contestId') contestId: string,
    @Ctx() { req }: MyContext
  ) {
    const { userId } = req.session;
    try {
      await getConnection().query(
        `
        insert into stars ("userId", "contestId")
        values ($1, $2);
      `,
        [userId, contestId]
      );
    } catch (error) {
      console.error(error);
      return false;
    }
    await getConnection().query(
      `
      update contests c
      set points = points + 1
      where c.id = $1;
      `,
      [contestId]
    );

    return true;
  }

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
      creatorId: req.session.userId,
    }).save();
    return { contest };
  }

  @Query(() => Contest, { nullable: true })
  async getContest(@Arg('contestId') contestId: string) {
    const contest = await getConnection().query(
      `
      select c.*,
      json_build_object(
        'id', u.id,
        'name', u.name,
        'email', u.email,
        'updatedAt', u."updatedAt",
        'createdAt', u."createdAt"
      ) creator
      from contests c
      inner join users u on u.id = c."creatorId"
      where c.id = $1
    `,
      [contestId]
    );
    console.log(contest);
    return contest[0];
  }

  @Query(() => [Contest])
  async findContests(
    @Arg('options') options: PaginationArgs
  ): Promise<Contest[]> {
    const limit = Math.min(50, options.limit);
    const replacments: any[] = [limit];

    if (options.cursor) {
      replacments.push(new Date(parseInt(options.cursor)));
    }

    const contests = await getConnection().query(
      `
      select c.* from contests c
      ${options.cursor ? `where c."createdAt" < $2` : ''}
      order by c."createdAt" DESC
      limit $1
    `,
      replacments
    );

    console.log(contests);

    return contests;
  }
}
