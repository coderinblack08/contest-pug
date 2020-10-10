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
import { Contestant } from '../entity/Contestant';
import { Star } from '../entity/Star';
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
    // await Contest.update(contestId, { points: 0 });
    // await Star.delete({});
    const star = await Star.findOne({ userId, contestId });
    if (!star) {
      await getConnection().query(
        `
        insert into stars ("userId", "contestId")
        values ($1, $2);
      `,
        [userId, contestId]
      );
      await getConnection().query(
        `
        update contests c
        set points = points + 1
        where c.id = $1;
        `,
        [contestId]
      );
    } else {
      await getConnection().query(
        `
        delete from stars 
        where "userId" = $1 and "contestId" = $2;
      `,
        [userId, contestId]
      );
      await getConnection().query(
        `
        update contests c
        set points = points - 1
        where c.id = $1;
        `,
        [contestId]
      );
    }
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
  async getContest(
    @Arg('contestId') contestId: string,
    @Ctx() { req }: MyContext
  ) {
    const [contest] = await getConnection().query(
      `
      select c.*,
      json_build_object(
        'id', u.id,
        'name', u.name,
        'email', u.email,
        'profilePicture', u."profilePicture",
        'updatedAt', u."updatedAt",
        'createdAt', u."createdAt"
      ) creator
      from contests c
      inner join users u on u.id = c."creatorId"
      where c.id = $1
    `,
      [contestId]
    );
    const { userId } = req.session;
    const options = { userId, contestId };
    const contestant = await Contestant.findOne(options);
    const star = await Star.findOne(options);
    contest.isContestant = contestant !== undefined;
    contest.isStarred = star !== undefined;
    return contest;
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

  @Query(() => [Contest])
  async joinedContests(
    @Arg('options') options: PaginationArgs,
    @Ctx() { req }: MyContext
  ): Promise<Contest[]> {
    const limit = Math.min(50, options.limit);
    const replacments: any[] = [limit, req.session.userId];

    if (options.cursor) {
      replacments.push(new Date(parseInt(options.cursor)));
    }

    const contests: any[] = await getConnection().query(
      `
      select c.* from contests c
      ${options.cursor ? `where c."createdAt" < $3` : ''}
      inner join contestants t on t."contestId" = c.id and t."userId" = $2
      union
      select * from contests  
      where "creatorId" = $2 ${options.cursor ? `and "createdAt" < $3` : ''}
      order by "createdAt" DESC
      limit $1;
    `,
      replacments
    );

    console.log(contests);

    return contests;
  }

  @Mutation(() => Boolean)
  async toggleContestant(
    @Arg('contestId') contestId: string,
    @Ctx() { req }: MyContext
  ) {
    const { userId } = req.session;
    const options = { userId, contestId };
    const contestant = await Contestant.findOne(options);
    console.log(contestant);

    if (contestant) {
      await Contestant.delete(options);
      return false;
    }
    await Contestant.create(options).save();
    return true;
  }
}
