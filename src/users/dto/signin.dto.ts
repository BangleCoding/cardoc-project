import { IsString } from 'class-validator';

//hash로 저장된 패스워드를 불러와야 하기 때문에 CreateUserDto와 별개로 만들어준 dto
export class SignInDto {
  @IsString()
  userId: string;

  @IsString()
  password: string;
}
