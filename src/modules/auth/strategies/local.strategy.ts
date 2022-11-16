import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { LoginUserDto } from '../../users/dto/login-user.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser({ email, password });
    console.log('USER - VALIDATE');
    console.log(user);

    if (!user) {
      throw new UnauthorizedException('No tiene Autorización');
    }

    console.log(user);

    return user;
  }
}
