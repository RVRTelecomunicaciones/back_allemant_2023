import { QueryVo } from '@app/vo/query.vo';
import { ApiProperty } from '@nestjs/swagger';

export class ValidateVo extends QueryVo {
  @ApiProperty({ description: 'Email' })
  email?: string;

  @ApiProperty({ description: 'Telefono' })
  mobile?: string;
}
