/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { AuthService } from '../auth.service';
import { Res } from '@nestjs/common';
const cookieExtractor = (request: Request): string | undefined => {
  return request.cookies['refreshToken'];
};
import { ConfigService } from '@nestjs/config';
import { ApiConfigService } from '@app/shared/services/api-config.service';

@Injectable()
export class RtStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(configService: ApiConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.authConfig.jwtRefreshTokenSecret,
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: any) {
    // eslint-disable-next-line prefer-const
    /* let { iat, sub, exp, ...user } = payload; */
    /* user = this.authService.validateRefreshToken({
      user: payload,
      refreshToken: req.cookies['refreshToken'],
    });

    if (!user) throw new UnauthorizedException();

    return user; */
    const refreshToken = req.get('authorization').replace('Bearer', '').trim();
    return {
      ...payload,
      refreshToken,
    };
  }
}
