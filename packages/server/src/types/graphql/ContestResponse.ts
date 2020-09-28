import { ObjectType, Field } from 'type-graphql';
import { Contest } from '../../entity/Contest';
import { FieldError } from './FieldError';

@ObjectType()
export class ContestResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => Contest, { nullable: true })
  contest?: Contest;
}
