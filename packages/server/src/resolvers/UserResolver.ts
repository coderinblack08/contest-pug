import * as Yup from 'yup';
import { v4 } from 'uuid';
import argon from 'argon2';
import { registerSchema, registerObject } from '@contest-pug/common';
import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from 'type-graphql';
import { RegisterArgs } from '../types/graphql/inputs/RegisterArgs';
import { cookie_name, forgot_password_prefix } from '../constants';
import { LoginArgs } from '../types/graphql/inputs/LoginArgs';
import { UserResponse } from '../types/graphql/UserResponse';
import { parseYupErrors } from '../utils/parseYupErrors';
import { sendEmail } from '../utils/sendEmail';
import { MyContext } from '../types/MyContext';
import { User } from '../entity/User';

@Resolver(User)
export class UserResolver {
  @FieldResolver(() => String)
  email(@Root() user: User, @Ctx() { req }: MyContext) {
    if (req.session.userId === user.id) {
      return user.email;
    }
    return '';
  }

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

  @Mutation(() => Boolean)
  async logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) => {
      req.session.destroy((err) => {
        if (err) {
          console.error(err);
          resolve(false);
          return;
        }
        res.clearCookie(cookie_name);
        resolve(true);
      });
    });
  }

  @Mutation(() => Boolean)
  async forgotPassword(
    @Arg('email') email: string,
    @Ctx() { redis }: MyContext
  ) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return true;
    }
    const token = v4();
    const url = `http://localhost:3000/change-password/${token}`;
    await redis.set(
      forgot_password_prefix + token,
      user.id,
      'ex',
      60 * 60 * 24
    );
    await sendEmail(
      email,
      'Contest Pug: Change Password',
      `
        Hello there! It seems that you have requested to change you password! (Expries in 1 day)
        Please click here to do so: <a href="${url}">${url}</a>
      `
    );
    return true;
  }

  @Mutation(() => UserResponse)
  async changePassword(
    @Arg('token') token: string,
    @Arg('newPassword') newPassword: string,
    @Ctx() { redis, req }: MyContext
  ): Promise<UserResponse> {
    if (newPassword.length < 8) {
      return {
        errors: [
          {
            field: 'password',
            message: 'Your passowrd is under the 8 character limit',
          },
        ],
      };
    }
    if (newPassword.length > 128) {
      return {
        errors: [
          {
            field: 'password',
            message: 'Your passowrd is over the 128 character limit',
          },
        ],
      };
    }
    const userId = await redis.get(forgot_password_prefix + token);
    if (!userId) {
      return {
        errors: [
          {
            field: 'token',
            message: 'Your token is invalid or has expired',
          },
        ],
      };
    }
    const user = await User.findOne(userId);
    if (!user) {
      return {
        errors: [
          {
            field: 'token',
            message: 'User no longer exists',
          },
        ],
      };
    }
    await User.update(
      { id: parseInt(userId) },
      { password: await argon.hash(newPassword) }
    );
    await redis.del(forgot_password_prefix + token);
    req.session.userId = user.id;
    return { user };
  }

  @Mutation(() => Boolean)
  async updateUser(@Arg('name') name: string, @Ctx() { req }: MyContext) {
    const validation = Yup.object().shape({ name: registerObject.name });
    await validation.validate({ name });
    await User.update(req.session.userId, { name });
    return true;
  }
}
