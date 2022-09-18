import { BaseEntity, Column, Entity, ManyToMany, JoinTable, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '@app/modules/role/entities/role.entity';
import { SharedEntity } from '@app/modules/shared/entities/shared.entity';

@Entity()
export class Permission extends SharedEntity {
  @Column({ nullable: true })
  parent_menu: string;

  @Column({ nullable: true })
  parent_id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  alias: string;

  @Column({ nullable: true })
  url: string;

  @Column({ nullable: true })
  icon: string;

  @ManyToMany(() => Role, (role) => role.permissions)
  roles: Role[];
}
