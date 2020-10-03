import { Field, ObjectType } from 'type-graphql';
import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
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
  @PrimaryColumn()
  contestId!: string;

  @Field(() => Contest)
  @ManyToOne(() => Contest, (contest) => contest.stars)
  contest!: Contest;

  @Field()
  @PrimaryColumn()
  index!: number;

  @Field()
  @PrimaryColumn({ default: 0 })
  points!: number;

  @Field(() => ShortAnswer, { nullable: true })
  @OneToOne(() => ShortAnswer, { nullable: true })
  @JoinColumn()
  shortAnswer?: ShortAnswer;
}
