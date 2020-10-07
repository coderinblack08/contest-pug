import { Field, Int, ObjectType } from 'type-graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Contest } from './Contest';
import { Contestant } from './Contestant';
import { Star } from './Star';

@Entity('users')
@ObjectType()
export class User extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  profilePicture?: string;

  @OneToMany(() => Contest, (contest) => contest.creator)
  contests!: Contest[];

  @OneToMany(() => Star, (star) => star.user)
  stars!: Star[];

  @OneToMany(() => Contestant, (star) => star.user)
  contestants!: Contestant[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt!: Date;
}
