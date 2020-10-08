import { Field, ID, Int, ObjectType } from 'type-graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Contestant } from './Contestant';
import { Problem } from './Problems';
import { Star } from './Star';
import { User } from './User';

@Entity('contests')
@ObjectType()
export class Contest extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column()
  name!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  website?: string;

  @Field()
  @Column()
  thumbnail!: string;

  @Field()
  @Column()
  description!: string;

  @Field(() => Int)
  @Column({ type: 'int' })
  length!: number;

  @Field(() => String)
  @Column({ type: 'date' })
  startDate!: Date;

  @Field(() => String)
  @Column({ type: 'date' })
  endDate!: Date;

  @Field(() => [String])
  @Column({ type: 'text', array: true })
  tags!: string[];

  @Field(() => Boolean)
  @Column({ type: 'bool' })
  leaderboard!: boolean;

  @Field(() => Boolean)
  @Column({ type: 'bool' })
  private!: boolean;

  @Field(() => Boolean)
  @Column({ type: 'bool', default: 'false' })
  open!: boolean;

  @Field(() => Int)
  @Column()
  creatorId!: number;

  @Field(() => Int)
  @Column({ default: 0 })
  points!: number;

  @Field(() => Boolean, { defaultValue: false })
  isContestant!: boolean;

  @Field(() => Boolean, { defaultValue: false })
  isStarred!: boolean;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.contests)
  creator!: User;

  @OneToMany(() => Star, (star) => star.contest)
  stars!: Star[];

  @OneToMany(() => Contestant, (star) => star.contest)
  contestants!: Contestant[];

  @OneToMany(() => Problem, (problem) => problem.contest)
  problems!: Problem[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt!: Date;
}
