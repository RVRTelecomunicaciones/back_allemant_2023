import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { HelperModule } from '@app/processors/helper/helper.module';
import { LocalStrategy } from './strategies/local.strategy';
import { RtStrategy } from './strategies/refresh-jwt.strategy';
import { UsersModule } from '../users/users.module';
import { TokensModule } from '../tokens/tokens.module';

@Module({
  imports: [UsersModule, TokensModule, HelperModule],
  providers: [AuthService, LocalStrategy, JwtStrategy, RtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
