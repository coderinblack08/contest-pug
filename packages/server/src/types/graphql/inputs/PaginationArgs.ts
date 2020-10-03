import { InputType, Field } from 'type-graphql';

@InputType()
export class PaginationArgs {
  @Field() limit!: number;
  @Field({ nullable: true }) cursor?: string;
}
