import { Field, ID, Int, ObjectType } from 'type-graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
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
  userId!: number;

  @ManyToOne(() => User, (user) => user.contests)
  user!: User;

  @Field(() => String)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt!: Date;
}
