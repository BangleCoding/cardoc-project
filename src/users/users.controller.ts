import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { SignInDto } from './dto/signin.dto';
import { UsersService } from './users.service';
import { User } from '../entites/user.entity';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    console.log('testing');
    return await this.usersService.createUser(createUserDto);
  }

  // @Post()
  // signIn(@Body() signInDto: SignInDto): Promise<{ accessToken }> {
  //   return this.usersService.signIn(signInDto);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Post('/signout')
  // signOut(@GetUser() user: User): Promise<{ message: string }> {
  //   return this.usersService.signOut(user);
  // }
}
