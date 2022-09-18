import { ApiProperty } from '@nestjs/swagger';
import { Transform, TransformFnParams } from 'class-transformer';
import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Column,
  Timestamp,
} from 'typeorm';

export class SharedEntity extends BaseEntity {
  @ApiProperty({
    readOnly: true,
  })
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
    comment: 'Generar ID',
  })
  id: number;

  @Transform((row: TransformFnParams) => +new Date(row.value))
  @ApiProperty({
    readOnly: true,
    description: 'Fecha de creación',
    type: 'integer',
    maximum: 9999999999999,
    example: Date.now(),
  })
  @CreateDateColumn({
    type: 'timestamp',
    nullable: false,
    name: 'created_at',
    comment: 'Fecha de creación',
  })
  createdAt: Date;

  @Transform((row: TransformFnParams) => +new Date(row.value))
  @ApiProperty({
    readOnly: true,
    description: 'Fecha de Actualización',
    type: 'integer',
    maximum: 9999999999999,
    example: Date.now(),
  })
  @UpdateDateColumn({
    type: 'timestamp',
    nullable: false,
    name: 'updated_at',
    comment: 'Fecha de Actualización',
  })
  updatedAt: Date;

  @ApiProperty({
    nullable: true,
    readOnly: true,
    required: false,
    description: 'Fecha de Eliminación',
    type: 'integer',
    maximum: 9999999999999,
    example: Date.now(),
  })
  @DeleteDateColumn({
    type: 'timestamp',
    nullable: false,
    name: 'deleted_at',
    select: false,
    comment: 'Fecha de Eliminación',
  })
  deletedAt: Date;

  @ApiProperty({
    description: 'oculto',
    readOnly: true,
  })
  @Column({
    default: false,
    name: 'is_hidden',
    type: 'tinyint',
    comment: 'oculto',
  })
  isHidden: boolean;
}
