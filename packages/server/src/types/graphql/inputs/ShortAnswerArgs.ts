import { Field, InputType } from 'type-graphql';

@InputType()
export class ShortAnswerArgs {
  @Field() contestId!: string;
  @Field({ nullable: true }) question?: string;
  @Field({ nullable: true }) answer?: string;
  @Field({ nullable: true }) solution?: string;
}
