import { Column, Entity } from 'typeorm';

@Entity()
export class Driving {
  @Column()
  id: number;
}
