import { Module } from '@app/modules/module/entities/module.entity';
import { SharedEntity } from '@app/modules/shared/entities/shared.entity';
import { Index, JoinColumn, ManyToOne } from 'typeorm';
import { Column } from 'typeorm/decorator/columns/Column';
import { Entity } from 'typeorm/decorator/entity/Entity';

@Entity()
export class ModuleLevel extends SharedEntity {
  @Column({ nullable: false })
  value: string;

  @Column({ nullable: false })
  description: string;

  @Column()
  @Index()
  module_id!: number;

  @ManyToOne(() => Module, (module) => module.moduleslevels)
  @JoinColumn({ name: 'module_id', referencedColumnName: 'id' })
  module!: Module;

  @Column({ nullable: true })
  route_name: string;

  @Column({ nullable: true })
  route_path: string;
}
