import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('/register')
  signup(@Body() createUserDto: CreateUserDto) {
    createUserDto.role = "USER";
    return this.userService.signup(createUserDto);

  }

  @Post("/login")
  signin(@Body() loginUserDto: LoginUserDto) {

    return this.userService.signin(loginUserDto);
  }
}
