import { InputType, Field } from 'type-graphql';

@InputType()
export class RegisterArgs {
  @Field() name!: string;
  @Field() email!: string;
  @Field() password!: string;
}
