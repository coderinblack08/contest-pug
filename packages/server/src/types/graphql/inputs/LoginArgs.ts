import { Field, InputType } from 'type-graphql';

@InputType()
export class LoginArgs {
  @Field() email!: string;
  @Field() password!: string;
}
