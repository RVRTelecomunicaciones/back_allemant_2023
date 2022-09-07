import { StatusEnum } from '@app/enums/status.enum';
import { Permission } from '@app/modules/permission/entities/permission.entity';
import { SharedEntity } from '@app/modules/shared/entities/shared.entity';
import { User } from '@app/modules/users/entities/user.entity';
import { Column, Entity, Unique, Index, OneToMany, JoinTable, ManyToMany } from 'typeorm';

@Entity('role')
@Unique('name_deleted', ['name', 'deletedAt'])
export class Role extends SharedEntity {
  @Index()
  @Column({
    type: 'varchar',
    nullable: false,
    length: 50,
    name: 'name',
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 100,
    name: 'description',
  })
  description: string;

  @Column({
    type: 'tinyint',
    nullable: true,
    default: 1,
    name: 'status',
  })
  status: StatusEnum;

  @OneToMany(() => User, (user) => user.role)
  users: User[];

  // @ManyToMany(() => Permission, (permission) => permission.roles)
  // permissions: Permission[];
  @ManyToMany(() => Permission, (permission) => permission.roles, {
    eager: true,
    cascade: true,
  })
  @JoinTable({
    name: 'role_permission',
    joinColumn: {
      name: 'role_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'permission_id',
      referencedColumnName: 'id',
    },
  })
  permissions: Permission[];
}
