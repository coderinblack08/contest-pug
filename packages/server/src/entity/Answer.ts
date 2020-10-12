import { Field, ObjectType } from 'type-graphql';
import {
  Entity,
  BaseEntity,
  Column,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Contest } from './Contest';
import { Problem } from './Problems';
import { User } from './User';

@Entity('answers')
@ObjectType()
export class Answer extends BaseEntity {
  // @Field()
  // @PrimaryGeneratedColumn()
  // id!: number;

  @Field()
  @PrimaryColumn()
  contestId!: string;

  @ManyToOne(() => Contest)
  @JoinColumn()
  contest!: Contest;

  @Field()
  @Column()
  answer!: string;

  @Field()
  @PrimaryColumn()
  problemId!: number;

  @ManyToOne(() => Problem)
  @JoinColumn()
  problem!: Problem;

  @Field()
  @PrimaryColumn()
  userId!: number;

  @ManyToOne(() => User)
  @JoinColumn()
  user!: User;
}
