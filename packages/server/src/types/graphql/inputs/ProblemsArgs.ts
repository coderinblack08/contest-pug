import { InputType, Field } from 'type-graphql';

@InputType()
export class ProblemsArgs {
  @Field() contestId!: string;
  @Field({ nullable: true }) question?: string;
  @Field({ nullable: true }) answer?: string;
  @Field({ nullable: true }) solution?: string;
  @Field({ nullable: true }) points?: number;
}
