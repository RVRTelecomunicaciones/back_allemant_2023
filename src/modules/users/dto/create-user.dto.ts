import { UniqueOnDatabase } from '@app/modules/auth/validations/UniqueValidation';
import { Length, IsString, Matches, IsEmail, MinLength } from 'class-validator';
import { User } from '../entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: 'Sus datos deben tener una longitud minima de 3 caracteres',
  })
  name: string;

  @ApiProperty()
  @IsEmail()
  /*  @UniqueOnDatabase(User, {
    message: 'Un usuario con este correo electrónico ya existe',
  }) */
  /*   @IsEmail(null, { message: 'Ingrese un email válido' })
   */
  email: string;

  @ApiProperty()
  @Length(6, 32, {
    message: 'La contraseña debe tener una longitud de 6 a 32 caracteres',
  })
  password: string;
}
