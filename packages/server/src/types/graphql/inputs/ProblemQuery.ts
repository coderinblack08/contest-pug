import { InputType, Field } from 'type-graphql';

@InputType()
export class ShortAnswerQuery {
  @Field()
  id!: number;

  @Field({ nullable: true })
  question?: string;

  @Field({ nullable: true })
  answer?: string;

  @Field({ nullable: true })
  solution?: string;
}

@InputType()
export class ProblemQuery {
  @Field()
  contestId!: string;

  @Field()
  index!: number;

  @Field()
  points!: number;

  @Field({ nullable: true })
  shortAnswerId?: number;

  @Field(() => ShortAnswerQuery, { nullable: true })
  shortAnswer?: ShortAnswerQuery;
}
