import { InputType, Field } from 'type-graphql';

@InputType()
export class AnswerInput {
  @Field() problemId!: number;
  @Field() answer!: string;
}

@InputType()
export class AnswerArgs {
  @Field() contestId!: string;
  @Field(() => [AnswerInput]) answers!: AnswerInput[];
}
