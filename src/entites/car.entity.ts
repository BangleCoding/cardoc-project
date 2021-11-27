import { Column, Entity } from 'typeorm';

@Entity()
export class Car {
  @Column()
  id: number;
}
