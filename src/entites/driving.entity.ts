import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Mycar } from './mycar.entity';

@Entity()
export class Driving {
  @PrimaryColumn()
  @ManyToOne((type) => Mycar, (mycar) => mycar.userId)
  userId: string;

  @PrimaryColumn()
  @ManyToOne((type) => Mycar, (mycar) => mycar.trimId)
  trimId: string;

  @Column()
  type: string;

  @Column()
  frontTire: string;

  @Column()
  rearTire: string;
}
