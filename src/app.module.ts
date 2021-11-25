import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { CarController } from './car/car.controller';
import { CarService } from './car/car.service';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { CarModule } from './car/car.module';
import { DrivingController } from './driving/driving.controller';
import { DrivingModule } from './driving/driving.module';

@Module({
  imports: [UserModule, CarModule, DrivingModule],
  controllers: [AppController, UserController, CarController, DrivingController],
  providers: [AppService, CarService, UserService],
})
export class AppModule {}
