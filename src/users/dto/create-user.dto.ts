import { IsDate, IsString } from 'class-validator';

//hash로 저장된 패스워드를 불러오기 때문에 CreateUserDto와 별개로 만들어준 dto
export class CreateUserDto {
  @IsString()
  userId: string;

  @IsString()
  password: string;
}
