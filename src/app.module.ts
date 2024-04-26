import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UserModule } from './user/user.module';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [CatsModule, UserModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
