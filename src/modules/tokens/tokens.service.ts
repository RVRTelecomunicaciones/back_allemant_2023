import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Token } from './entity/token.entity';
import { IToken } from './interfaces/token.interface';
import { RefreshToken } from './vo/token.vo';
import { RefreshTokenDTO } from './dto/refresh-token.dto';
import { ApiConfigService } from '@app/shared/services/api-config.service';

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

  generateJwtTokens(data): IToken {
    console.log('MyPayload');
    console.log(data);
    const payload = { ...data, sub: data.id };
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: this.configService.authConfig.jwtExpirationTime as number,
      secret: this.configService.authConfig.jwtTokenSecret as string,
    });
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: 60 * 60 * 24 * 7,
      secret: this.configService.authConfig.jwtRefreshTokenSecret as string,
    });

    return {
      accessToken,
      refreshToken,
    };
  }
  findOne(id: any): Promise<RefreshToken> {
    return this.tokenRepository.findOne(id);
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  findOneRefreshToken(refreshtoken: Object): Promise<RefreshToken> {
    return this.tokenRepository.findOne(refreshtoken);
  }

  async updateOrCreate(userId: number, refreshToken: string) {
    /*     const { refreshToken, user } = refreshTokenDto;
     */
    const tokenData = await this.findOne(userId);

    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return this.tokenRepository.save(tokenData);
    }

    return this.tokenRepository.save({ refreshToken, user: { id: userId } });
  }
  remove(refreshToken: string) {
    return this.tokenRepository.delete({ refreshToken });
  }
}
