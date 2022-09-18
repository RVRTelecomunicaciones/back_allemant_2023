import { SharedEntity } from '@app/modules/shared/entities/shared.entity';
import { User } from '@app/modules/users/entities/user.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Column } from 'typeorm/decorator/columns/Column';
import { Module } from './module.entity';

@Entity()
export class UserModule extends SharedEntity {
  @ManyToOne(() => User, (user) => user.modules)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Module)
  @JoinColumn([{ name: 'module_id' }])
  modules: Module;
}
