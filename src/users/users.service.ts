import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { AuthService } from 'src/auth/auth.service';
import { User } from 'src/entites/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
// import { SignInDto } from './dto/signin.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>, // private authService: AuthService,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const checkUser = await this.usersRepository.findOne({
      where: {
        user_id: createUserDto.userId,
      },
    });

    if (checkUser) {
      throw new ConflictException('이미 가입된 이메일입니다.');
    }

    const user = this.usersRepository.create(createUserDto);
    try {
      const result = await this.usersRepository.save(user);
      delete result.password;
      return result;
    } catch (error) {
      throw new InternalServerErrorException(
        error,
        '회원 가입에 오류가 발생했습니다.',
      );
    }
  }

  // signIn(signInDto: SignInDto) {}
}
