import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { SignInDto } from './dto/signin.dto';
import { UsersService } from './users.service';
import { User } from '../entites/user.entity';
import { GetUser } from 'src/auth/get-user.decorator';
import { JWtAuthGuard } from 'src/auth/auth-guard/jwt-auth.guard';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.usersService.createUser(createUserDto);
  }

  @Post('/signIn')
  signIn(@Body() signInDto: SignInDto): Promise<{ accessToken }> {
    return this.usersService.signIn(signInDto);
  }

  // @UseGuards(JWtAuthGuard)
  // @Post('/signout')
  // signOut(@GetUser() user: User): Promise<{ message: string }> {
  //   return this.usersService.signOut(user);
  // }
}
