import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from 'type-graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';
import { v4 } from 'uuid';
import { User } from '../entity/User';
import { MyContext } from '../types/MyContext';
import { isAuth } from '../middlewares/isAuth';

@Resolver()
export class ProfilePictureResolver {
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async uploadProfilePicture(
    @Arg('picture', () => GraphQLUpload)
    { filename, createReadStream }: FileUpload,
    @Ctx() { req }: MyContext
  ): Promise<Boolean> {
    const token = v4();
    await User.update(req.session.userId, {
      profilePicture: `${token}-${filename}`,
    });
    return new Promise((resolve, reject) =>
      createReadStream()
        .pipe(
          createWriteStream(`${__dirname}/../../images/${token}-${filename}`)
        )
        .on('finish', () => resolve(true))
        .on('error', () => reject(false))
    );
  }
}
