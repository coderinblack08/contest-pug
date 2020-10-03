import { Field, ObjectType } from 'type-graphql';
import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  ManyToOne,
  OneToOne,
  Column,
} from 'typeorm';
import { Contest } from './Contest';
import { ShortAnswer } from './ShortAnswer';

@Entity('problems')
@ObjectType()
export class Problem extends BaseEntity {
  @Field()
  @PrimaryColumn()
  contestId!: string;

  @ManyToOne(() => Contest, (contest) => contest.stars)
  contest!: Contest;

  @Field()
  @PrimaryColumn()
  index!: number;

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
