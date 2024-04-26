import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard, PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { constants } from 'src/config/constants';
import { jwtPayload } from 'src/interfaces/jwtPayload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: constants.jwtSecret,
    });
  }

  async validate(payload: jwtPayload) {
    if (!payload) {
      throw new UnauthorizedException();
    }
    if(payload.role != "ADMIN"){
      throw new UnauthorizedException();
    }
    return payload;
  }
}

// 3. Implement Guard
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
