import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { DatabaseModule } from 'src/databse.module';
import { catsProviders } from './cats.provider';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { constants } from 'src/config/constants';
import { JwtStrategy } from 'src/guards/AuthGuard';

@Module({
  imports: [
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.register({secret:constants.jwtSecret}),
    DatabaseModule
  ],
  controllers: [CatsController],
  providers: [JwtStrategy,CatsService, ...catsProviders],
})
export class CatsModule { }
