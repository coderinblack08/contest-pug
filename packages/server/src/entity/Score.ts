import { Field, ObjectType } from 'type-graphql';
import {
  Entity,
  BaseEntity,
  Column,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  CreateDateColumn,
} from 'typeorm';
import { Contest } from './Contest';
import { User } from './User';

@Entity('scores')
@ObjectType()
export class Score extends BaseEntity {
  @Field()
  @PrimaryColumn()
  contestId!: string;

  @ManyToOne(() => Contest)
  @JoinColumn()
  contest!: Contest;

  @Field()
  @Column()
  total!: number;

  @Field()
  @Column()
  scored!: number;

  @Field()
  @PrimaryColumn()
  userId!: number;

  @ManyToOne(() => User)
  @JoinColumn()
  user!: User;

  @Field(() => String)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => String)
  @CreateDateColumn()
  updatedAt!: Date;
}
