import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Brand {
  @PrimaryColumn()
  brandId: number;

  @Column()
  brandName: string;

  @Column()
  country: string;

  @Column()
  isImported: boolean;

  @Column({ nullable: true })
  brandImgUrl: string;

  @Column({ nullable: true })
  brandUrl: string;

  @Column({ type: 'datetime' })
  CreatedAt: Date;
}
