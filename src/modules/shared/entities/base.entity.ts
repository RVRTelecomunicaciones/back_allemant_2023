import { Transform, TransformFnParams } from 'class-transformer';
import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
export class MyBaseEntity extends BaseEntity {

 @Transform((row: TransformFnParams) => +new Date(row.value))
 @CreateDateColumn({
   type: 'timestamp',
   nullable: false,
   name: 'created_at',
   comment: 'Fecha de creación',
 })
 createdAt: Date;

 @Transform((row: TransformFnParams) => +new Date(row.value))
 @UpdateDateColumn({
   type: 'timestamp',
   nullable: false,
   name: 'updated_at',
   comment: 'Fecha de Actualización',
 })
 updatedAt: Date;

 @DeleteDateColumn({
   type: 'timestamp',
   nullable: false,
   name: 'deleted_at',
   select: false,
   comment: 'Fecha de Borrado',
 })
 deletedAt: Date;
}