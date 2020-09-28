import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class ContestArgs {
  @Field()
  name!: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  website?: string;

  @Field()
  thumbnail!: string;

  @Field()
  description!: string;

  @Field(() => Int)
  length!: number;

  @Field(() => String)
  startDate!: Date;

  @Field(() => String)
  endDate!: Date;

  @Field(() => [String])
  tags!: string[];

  @Field(() => Boolean)
  leaderboard!: boolean;

  @Field(() => Boolean)
  private!: boolean;
}
