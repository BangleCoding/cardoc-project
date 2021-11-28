import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usercar } from 'src/entites/userCar.entity';
import { AuthModule } from '../auth/auth.module';
import { User } from '../entites/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Usercar]),
    forwardRef(() => AuthModule),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
