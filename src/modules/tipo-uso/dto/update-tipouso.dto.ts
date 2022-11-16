import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateTipoUsoDto {
    @ApiProperty()
    @IsString()
    descripcion: string;
}
