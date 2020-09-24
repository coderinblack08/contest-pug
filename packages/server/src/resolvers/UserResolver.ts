import argon from 'argon2';
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { RegisterArgs } from '../types/graphql/inputs/RegisterArgs';
import { registerSchema } from '@contest-pug/common';
import { UserResponse } from '../types/graphql/UserResponse';
import { LoginArgs } from '../types/graphql/inputs/LoginArgs';
import { MyContext } from '../types/MyContext';
import { User } from '../entity/User';
import { parseYupErrors } from '../utils/parseYupErrors';

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req }: MyContext) {
    if (!req.session.userId) {
      return null;
    }
    return await User.findOne(req.session.userId);
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg('options', () => RegisterArgs) options: RegisterArgs,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    try {
      await registerSchema.validate(options);
    } catch (error) {
      return { errors: [parseYupErrors(error)] };
    }
    const hashedPassword = await argon.hash(options.password);
    const user = await User.create({
      ...options,
      password: hashedPassword,
    }).save();
    req.session.userId = user.id;
    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg('options', () => LoginArgs) options: LoginArgs,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const user = await User.findOne({ where: { email: options.email } });
    if (!user) {
      return {
        errors: [
          {
            field: 'email',
            message: "User doesn't exist",
          },
        ],
      };
    }
    const validPassword = await argon.verify(user.password, options.password);
    if (!validPassword) {
      return {
        errors: [
          {
            field: 'password',
            message: 'Password Invalid',
          },
        ],
      };
    }
    req.session.userId = user.id;
    return { user };
  }
}
