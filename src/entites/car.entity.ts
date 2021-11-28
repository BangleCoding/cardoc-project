import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Usercar } from './userCar.entity';

@Entity()
export class Car {
  @PrimaryColumn()
  @OneToMany((type) => Usercar, (usercar) => usercar.trimId)
  carId: string;

  @Column()
  brandId: string;

  @Column()
  carName: string;

  @Column({ type: 'datetime' })
  createdAt: Date;

  @Column({ type: 'datetime', nullable: true })
  modifiedAt: Date;
}
