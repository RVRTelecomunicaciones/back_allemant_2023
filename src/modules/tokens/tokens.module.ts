import { forwardRef, Module } from '@nestjs/common';
import { TokensService } from './tokens.service';
import { TokensController } from './tokens.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Token } from './entity/token.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { ApiConfigService } from '@app/shared/services/api-config.service';
import { UsersModule } from '../users/users.module';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RefreshJwtAuthGuard } from '../auth/guards/refresh-jwt-auth.guard';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([Token]),
    JwtModule.registerAsync({
      useFactory: (configService: ApiConfigService) => ({
        secret: configService.authConfig.jwtTokenSecret,
        signOptions: {
          expiresIn: configService.authConfig.jwtRefreshTokenExpirationTime,
        },
      }),
      inject: [ApiConfigService],
    }),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
  ],

  providers: [TokensService, LocalAuthGuard, JwtAuthGuard, RefreshJwtAuthGuard],
  exports: [JwtModule, TokensService],
})
export class TokensModule {}
