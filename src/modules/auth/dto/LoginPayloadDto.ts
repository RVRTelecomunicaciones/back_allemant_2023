import { LoginUserDto } from '@app/modules/users/dto/login-user.dto';
import { ApiProperty } from '@nestjs/swagger';

import { TokenPayloadDto } from './TokenPayloadDto';

export class LoginPayloadDto {
  @ApiProperty({ type: LoginUserDto })
  user: LoginUserDto;

  @ApiProperty({ type: TokenPayloadDto })
  token: TokenPayloadDto;

  constructor(user: LoginUserDto, token: TokenPayloadDto) {
    this.user = user;
    this.token = token;
  }
}
