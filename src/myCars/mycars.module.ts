import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from 'src/entites/brand.entity';
import { Car } from 'src/entites/car.entity';
import { Driving } from 'src/entites/driving.entity';
import { Mycar } from '../entites/mycar.entity';
import { MyCarsController } from './mycars.controller';
import { MyCarsService } from './mycars.service';

@Module({
  imports: [TypeOrmModule.forFeature([Mycar, Car, Brand, Driving])],
  controllers: [MyCarsController],
  providers: [MyCarsService],
  exports: [MyCarsService],
})
export class MyCarsModule {}
