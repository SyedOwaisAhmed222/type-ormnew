import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rank: string;

  @Column()
  salary: number;

  @OneToOne(() => User, (user) => user.employee)
  @JoinColumn()
  user: User;
}
