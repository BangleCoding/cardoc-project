import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthService } from 'src/auth/auth.service';
import { User } from 'src/entites/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { SignInDto } from './dto/signin.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private authService: AuthService,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const checkUser = await this.usersRepository.findOne({
      where: {
        userId: createUserDto.userId,
      },
    });
    if (checkUser) {
      throw new ConflictException('이미 가입된 이메일입니다.');
    }

    const user = this.usersRepository.create(createUserDto);
    const createdAt = new Date();

    user.createdAt = createdAt;
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

  async signIn(signInDto: SignInDto): Promise<{ accessToken: string }> {
    const { userId, password } = signInDto;
    const user = await this.usersRepository.findOne({ userId });

    if (user && (await bcrypt.compare(password, user.password))) {
      const loginedAt = new Date();
      user.loginedAt = loginedAt;
      await this.usersRepository.save(user);
      return this.authService.jwtSign(user);
    } else {
      throw new UnauthorizedException('login fail');
    }
  }

  async findOneByUserId(userId: string): Promise<User> {
    const user = await this.usersRepository.findOne({ userId });
    if (!user) {
      throw new NotFoundException('유효한 아이디가 아닙니다.');
    }
    return user;
  }
}
