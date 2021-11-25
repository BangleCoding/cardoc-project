import { Module } from '@nestjs/common';
import { DrivingService } from './driving.service';

@Module({
  providers: [DrivingService]
})
export class DrivingModule {}
