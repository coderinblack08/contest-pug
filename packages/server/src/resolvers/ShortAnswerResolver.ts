import { Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import { ShortAnswer } from '../entity/ShortAnswer';
import { MyContext } from '../types/MyContext';
import { isOwner } from '../utils/isOwner';

@Resolver(ShortAnswer)
export class ShortAnswerResolver {
  @FieldResolver(() => String)
  async answer(@Root() shortAnswer: ShortAnswer, @Ctx() { req }: MyContext) {
    try {
      console.log('CONTESTID' + shortAnswer.contestId);
      await isOwner(shortAnswer.contestId, req);
      return shortAnswer.answer;
    } catch (error) {
      console.error(error);
      return '';
    }
  }
}
