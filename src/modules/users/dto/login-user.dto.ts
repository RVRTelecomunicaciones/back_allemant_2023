import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @IsString()
  @IsEmail()
  @ApiProperty()
  readonly email: string;

  @IsString()
  @ApiProperty()
  readonly password: string;
}
