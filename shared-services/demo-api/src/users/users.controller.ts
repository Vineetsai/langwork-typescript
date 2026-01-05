import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto, UserListDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): UserListDto {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): UserDto {
    return this.usersService.findOne(Number(id));
  }
}
