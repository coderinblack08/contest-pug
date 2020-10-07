import { Field, ObjectType } from 'type-graphql';
import { Entity, BaseEntity, PrimaryColumn, ManyToOne } from 'typeorm';
import { Contest } from './Contest';
import { User } from './User';

@Entity('contestants')
@ObjectType()
export class Contestant extends BaseEntity {
  @Field()
  @PrimaryColumn()
  userId!: number;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.contestants)
  user!: User;

  @Field()
  @PrimaryColumn()
  contestId!: string;

  @Field(() => Contest)
  @ManyToOne(() => Contest, (contest) => contest.contestants)
  contest!: Contest;
}
