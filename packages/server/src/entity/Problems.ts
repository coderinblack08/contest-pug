import { Field, ObjectType } from 'type-graphql';
import {
  Entity,
  BaseEntity,
  ManyToOne,
  OneToOne,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Contest } from './Contest';
import { ShortAnswer } from './ShortAnswer';

@Entity('problems')
@ObjectType()
export class Problem extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  contestId!: string;

  @ManyToOne(() => Contest, (contest) => contest.stars)
  contest!: Contest;

  @Field()
  @Column({ default: 0 })
  points!: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  shortAnswerId?: number;

  @Field(() => ShortAnswer, { nullable: true })
  @OneToOne(() => ShortAnswer, (shortAnswer) => shortAnswer.problem, {
    nullable: true,
  })
  shortAnswer?: ShortAnswer;
}
