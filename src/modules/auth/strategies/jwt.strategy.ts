import { ApiConfigService } from '@app/shared/services/api-config.service';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(configService: ApiConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.authConfig.jwtTokenSecret,

    });
    console.log(configService.authConfig.jwtTokenSecret)
  }

  /*  async validate(payload: JwtPayload): Promise<User> {
    const { username, id } = payload;

    const user = await this.authService.validateUser();
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  } */
  async validate(payload: any) {
    const { iat, exp, sub, ...user } = payload;

    console.log(user);

    return payload;
  }
}
