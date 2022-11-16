import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { TokensService } from '../tokens/tokens.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { RefreshJwtAuthGuard } from './guards/refresh-jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { ApiConfigService } from '@app/shared/services/api-config.service';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { LoginPayloadDto } from './dto/LoginPayloadDto';
import { Request, Response } from 'express';
import { User } from '../users/entities/user.entity';
import { JwtPayload } from './strategies/jwt-payload';
import { JwtService } from '@nestjs/jwt';
import { IToken } from '../tokens/interfaces/token.interface';

@ApiTags('AUTENTICACIÓN')
@Controller('auth/')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly tokenService: TokensService,
    private readonly apiConfig: ApiConfigService
  ) {}

  //@UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() userLoginDto: LoginUserDto) {
    const user = await this.authService.validateUser(userLoginDto);
    const tokens: IToken = await this.tokenService.generateJwtTokens(user);

    await this.tokenService.updateOrCreate(user.id, tokens.refreshToken);

    return {
      ...tokens,
    };
  }

  @Post('register')
  async register(@Res({ passthrough: true }) response: Response, @Body() dto: CreateUserDto) {
    const user = await this.authService.register(dto);
    return user;
  }

  @Get('activation/:link')
  async activation(@Res({ passthrough: true }) response: Response, @Param('link') link: string) {
    await this.authService.activation(link);
    response.redirect(this.apiConfig.urlFrontend);
  }

  @Post('refresh')
  async refresh(@Body() body) {
    return await this.authService.validateRefreshToken(body.refresh_token);
  }

  /* @UseGuards(RefreshJwtAuthGuard)
  @Get('refresh')
  refresh(@Req() req, @Body() body) {
    console.log(req);
    console.log(body);
  } */

  @Get('verify')
  @HttpCode(HttpStatus.OK)
  async verifyMail(@Query('token') token: string): Promise<void> {
    await this.authService.activation(token);
  }
}
