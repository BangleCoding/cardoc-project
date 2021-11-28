import {
  BeforeInsert,
  Column,
  Entity,
  Generated,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';
import { Mycar } from './mycar.entity';

@Entity()
export class User {
  /** jwt guard를 위해 number 타입의 auto-increment id 설정.
   * PK는 id가 아닌 userId임에 유의. */
  @Generated('increment')
  id: number;

  @PrimaryColumn()
  @OneToMany((type) => Mycar, (mycar) => mycar.userId)
  userId: string;

  @Column()
  password: string;

  @Column({ type: 'datetime' })
  createdAt: Date;

  @Column({ type: 'datetime', nullable: true })
  loginedAt: Date;

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    try {
      this.password = await bcrypt.hash(this.password, 10);
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }
}
