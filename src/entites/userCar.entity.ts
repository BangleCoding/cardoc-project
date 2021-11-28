import {
  Column,
  Entity,
  Generated,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Car } from './car.entity';
import { Driving } from './driving.entity';
import { User } from './user.entity';

@Entity()
export class Usercar {
  @PrimaryColumn()
  @ManyToOne((type) => User, (user) => user.userId)
  userId: string;

  @PrimaryColumn()
  @ManyToOne((type) => Car, (car) => car.carId)
  trimId: string;

  @Column({ nullable: true })
  trimName: string;

  @Column({ type: 'datetime' })
  createdAt: Date;
}
