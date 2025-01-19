import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ObjectIdColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() // Works for PostgreSQL
  @ObjectIdColumn() // Works for MongoDB
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
