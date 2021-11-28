import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from 'src/entites/brand.entity';
import { Car } from 'src/entites/car.entity';
import { Driving } from 'src/entites/driving.entity';
import { Usercar } from '../entites/userCar.entity';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  imports: [TypeOrmModule.forFeature([Usercar, Car, Brand, Driving])],
  controllers: [CarsController],
  providers: [CarsService],
  exports: [CarsService],
})
export class CarsModule {}
