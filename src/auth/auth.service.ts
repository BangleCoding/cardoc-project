import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entites/user.entity';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  jwtSign(user: User): { accessToken: string } {
    const payload = {
      id: user.id,
      userId: user.userId,
      loginedAt: user.loginedAt,
    };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
