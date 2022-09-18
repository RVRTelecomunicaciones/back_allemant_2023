import { Role } from '@app/modules/role/entities/role.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
  Unique,
} from 'typeorm';
import { User } from './user.entity';

@Entity('user_role')
export class UserRole {
  @PrimaryColumn({ name: 'user_id' })
  userId: number;

  @PrimaryColumn({ name: 'role_id' })
  roleId: number;

  @ManyToOne(() => User, (user) => user.roles, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  users: User[];

  @ManyToOne(() => Role, (role) => role.users, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn([{ name: 'role_id', referencedColumnName: 'id' }])
  roles: Role[];
}
