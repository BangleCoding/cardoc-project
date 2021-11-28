import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MyCarsModule } from './myCars/mycars.module';
import { DrivingModule } from './driving/driving.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import Connection from 'mysql2/typings/mysql/lib/Connection';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: process.env.DB,
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      port: 3306,
      password: process.env.DB_PASS,
      entities: [__dirname + '/**/entities/*.entity{.ts,.js'],
      synchronize: true,
      autoLoadEntities: true,
      legacySpatialSupport: false,
    }),
    UsersModule,
    MyCarsModule,
    DrivingModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
