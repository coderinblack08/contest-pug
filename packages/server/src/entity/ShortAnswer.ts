import { Field, ObjectType } from 'type-graphql';
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('problems')
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
}
