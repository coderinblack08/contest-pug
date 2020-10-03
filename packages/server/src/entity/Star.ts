import { Field, ObjectType } from 'type-graphql';
import { Entity, BaseEntity, PrimaryColumn, ManyToOne } from 'typeorm';
import { Contest } from './Contest';
import { User } from './User';

@Entity('stars')
@ObjectType()
export class Star extends BaseEntity {
  @Field()
  @PrimaryColumn()
  userId!: number;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.stars)
  user!: User;

  @Field()
  @PrimaryColumn()
  contestId!: string;

  @Field(() => Contest)
  @ManyToOne(() => Contest, (contest) => contest.stars)
  contest!: Contest;
}
