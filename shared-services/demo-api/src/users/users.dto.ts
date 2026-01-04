import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(2)
  name: string;
}

export class UserDto {
  id: number;
  email: string;
  name: string;
  role: string;
}

export class UserListDto {
  users: UserDto[];
  total: number;
  page: number;
  pageSize: number;
}
