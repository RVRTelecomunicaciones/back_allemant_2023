import { User } from '@app/modules/users/entities/user.entity';
import { UserRepository } from '@app/modules/users/repository/users.repository';
import { UsersService } from '@app/modules/users/users.service';
import { ApiConfigService } from '@app/shared/services/api-config.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { JwtPayload } from './jwt-payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(configService: ApiConfigService, private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.authConfig.jwtTokenSecret,
    });
  }
  async validate(payload: JwtPayload) {
    const { email } = payload;

    const user = await this.usersService.getUserEntityByEmail(email);
    if (!user) {
      throw new UnauthorizedException();
    }
    console.log('User sin promise');
    console.log(user);
    return user;
  }
  /* 
  async validate(payload: any) {
    const { iat, exp, sub, ...user } = payload;

    console.log(user);

    return payload;
  } */
}
