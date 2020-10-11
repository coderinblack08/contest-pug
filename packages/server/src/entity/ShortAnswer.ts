import { Field, ObjectType } from 'type-graphql';
import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
} from 'typeorm';
import { Problem } from './Problems';

@Entity('shortanswers')
@ObjectType()
export class ShortAnswer extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  question?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  answer?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  solution?: string;

  @Field()
  @Column()
  contestId!: string;

  @Field(() => Problem)
  @OneToOne(() => Problem, (problem) => problem.shortAnswer)
  problem!: Problem;
}
