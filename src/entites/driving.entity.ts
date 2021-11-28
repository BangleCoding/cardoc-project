import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Usercar } from './userCar.entity';

@Entity()
export class Driving {
  @PrimaryColumn()
  @ManyToOne((type) => Usercar, (usercar) => usercar.userId)
  userId: string;

  @PrimaryColumn()
  @ManyToOne((type) => Usercar, (usercar) => usercar.trimId)
  trimId: string;

  @Column()
  type: string;

  @Column()
  frontTire: string;

  @Column()
  rearTire: string;
}
