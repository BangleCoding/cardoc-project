import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Mycar } from './mycar.entity';

@Entity()
export class Car {
  @PrimaryColumn()
  @OneToMany((type) => Mycar, (mycar) => mycar.trimId)
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
