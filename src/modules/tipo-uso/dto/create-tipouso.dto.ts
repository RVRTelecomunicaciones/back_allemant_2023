import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTipoUsoDto {
    @ApiProperty()
    @IsString()
    descripcion: string;
}
