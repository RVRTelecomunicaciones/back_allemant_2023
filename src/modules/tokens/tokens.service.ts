import { HttpException, HttpStatus, Injectable, Post, Req, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Token } from './entity/token.entity';
import { IToken } from './interfaces/token.interface';
import { RefreshToken } from './vo/token.vo';
import { RefreshTokenDTO } from './dto/refresh-token.dto';
import { ApiConfigService } from '@app/shared/services/api-config.service';
import { JwtPayload } from '../auth/strategies/jwt-payload';
import { User } from '../users/entities/user.entity';
import { Request, Response } from 'express';
import { UserRepository } from '../users/repository/users.repository';
import { TokenPayloadDto } from '../auth/dto/TokenPayloadDto';
import { TokenType } from '@app/constants/token-type';

@Injectable()
export class TokensService {
  constructor(
    @InjectRepository(Token)
    private tokenRepository: Repository<Token>,
    private jwtService: JwtService,
    private configService: ApiConfigService
  ) {}
  create(userId: number, refreshToken: string) {
    return this.tokenRepository.save({ user: { id: userId }, refreshToken });
  }

  generateJwtTokens(data: any): IToken {
    const payload = { ...data, sub: data.id };
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: 120,
      secret: this.configService.authConfig.jwtTokenSecret as string,
    });
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: 120,
      secret: this.configService.authConfig.jwtRefreshTokenSecret as string,
      algorithm: 'HS512',
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  async generateAccessJwtTokens(data: any) {
    const payload = { ...data, sub: data.id };
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: 120,
      secret: this.configService.authConfig.jwtTokenSecret as string,
    });
    return {
      expiresIn: 120,
      accessToken,
    };
  }

  async verifyJwtRefresh(data: any) {
    try {
      console.log('VERIFICANDO PAYLOAD');
      const payload = await this.jwtService.verify(data, {
        secret: this.configService.authConfig.jwtRefreshTokenSecret,
      });
      return payload;
    } catch (error) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
  }

  /* 
  deleteRefreshTokenCookie(response: Response) {
    response.cookie('refresh_token', '', {
      httpOnly: true,
      maxAge: 0,
      path: '/',
      sameSite: 'none',
      secure: true,
    });
  }

  addCookieToResponse(user: User, response: Response) {
    const { id, email, name } = user;
    const rt_payload: JwtPayload = { email, name };
    const refresh_token = this.jwtService.sign(rt_payload, {
      secret: this.configService.authConfig.jwtRefreshTokenSecret,
      expiresIn: '30d',
      algorithm: 'HS512',
    });
    response.cookie('refresh_token', refresh_token, {
      httpOnly: true,
      expires: new Date(new Date().getTime() + 1000 * 3600 * 24 * 30),
      path: '/',
      sameSite: 'none',
      secure: true,
    });
  } */
  async addTokenToHeader(user: User) {
    /*  const { email } = user;
    const at_payload: JwtPayload = { email };

    const payload = { ...user, sub: user.id };

    console.log('at_payload');
    console.log(at_payload);
    const access_token = this.jwtService.signAsync({
      secret: this.configService.authConfig.jwtTokenSecret as string,
      expiresIn: '5s',
    });
    console.log('access_token');
    console.log(access_token); */

    /* const access_token: TokenPayloadDto = {
      expiresIn: 3600,
      accessToken: await this.jwtService.signAsync({
        userId: user.id,
        type: TokenType.ACCESS_TOKEN,
      }),
    }; */
    const access_token = this.jwtService.signAsync({
      sub: user.id,
      expiresIn: '5s',
    });
    console.log('my access_token');
    console.log(access_token);
    /*   response.setHeader('access_token', access_token.accessToken);
    response.setHeader('Access-Control-Allow-Credentials', 'true'); */
    return access_token;
  }

  findOne(id: any): Promise<RefreshToken> {
    return this.tokenRepository.findOne({ where: { user: { id: id } } });
  }
  findOneRefreshToken(refreshtoken: Object): Promise<RefreshToken> {
    return this.tokenRepository.findOne(refreshtoken);
  }

  async updateOrCreate(userId: number, refreshToken: string) {
    const tokenData = await this.findOne(userId);

    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return this.tokenRepository.save(tokenData);
    }

    return this.tokenRepository.save({ refreshToken, user: { id: userId } });
  }
  async updateRefreshtoken(refreshToken: string) {
    const refresh_token = await this.findOneRefreshToken(refreshToken);
    console.log(refresh_token);

    const response_token = await this.updateOrCreate(refresh_token.user.id, refresh_token.refreshToken);
    return response_token;
  }

  remove(refreshToken: string) {
    return this.tokenRepository.delete({ refreshToken });
  }
}
