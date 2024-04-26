import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @Inject("USER_REPOSITORY")
    private userRepository: Repository<User>,
    private jwtService:JwtService,
  ) {
   }
  async signup(createUserDto: CreateUserDto) {
    let rounds = 10;
    let user = await this.userRepository.findOne({ where: { email: createUserDto.email } });
    if (user) {
      return "User already exist";
    }
    createUserDto.password = await bcrypt.hash(createUserDto.password, rounds);
    return this.userRepository.save(createUserDto);
  }

  async signin(loginUserDto: LoginUserDto) {
    let user = await this.userRepository.findOne({ where: { email: loginUserDto.email } });
    if (!user) {
      return "User does not exist";
    }
    let isMatch = await bcrypt.compare(loginUserDto.password, user.password);
    if (!isMatch) {
      return "Password does not match";
    }
    let access_token = await this.jwtService.signAsync({email:user.email, role:user.role});
    let userObj = {email:user.email, name:user.name, id:user.id};
    return {user:userObj, access_token};
  }
}
