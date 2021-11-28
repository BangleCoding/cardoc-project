import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Car } from './car.entity';
import { User } from './user.entity';

@Entity()
export class Mycar {
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
