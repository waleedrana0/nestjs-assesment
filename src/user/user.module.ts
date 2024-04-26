import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/databse.module';
import { usersProviders } from './user.provider';
import { JwtModule } from '@nestjs/jwt';
import { constants } from 'src/config/constants';


@Module({
  imports: [DatabaseModule, JwtModule.register({secret:constants.jwtSecret})],
  controllers: [UserController],
  providers: [UserService, ...usersProviders],
})
export class UserModule { }
