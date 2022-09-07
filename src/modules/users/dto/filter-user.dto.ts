import { IsOptional } from 'class-validator';

export class FilterDto {
  @IsOptional()
  name: string;

  @IsOptional()
  email: string;
}
