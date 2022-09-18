import { ModuleLevel } from '@app/modules/module-levels/entities/module-levels.entity';
import { SharedEntity } from '@app/modules/shared/entities/shared.entity';
import { User } from '@app/modules/users/entities/user.entity';
import { Column } from 'typeorm/decorator/columns/Column';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { ManyToMany } from 'typeorm/decorator/relations/ManyToMany';
import { OneToMany } from 'typeorm/decorator/relations/OneToMany';

@Entity()
export class Module extends SharedEntity {
  @Column({ nullable: false })
  value: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  order_menu: number;

  @OneToMany(() => ModuleLevel, (modulelevel) => modulelevel.module)
  moduleslevels!: ModuleLevel[];
}
