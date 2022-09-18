import { ModuleLevel } from '@app/modules/module-levels/entities/module-levels.entity';
import { SharedEntity } from '@app/modules/shared/entities/shared.entity';
import { User } from '@app/modules/users/entities/user.entity';
import { JoinColumn, ManyToOne } from 'typeorm';

export class ModuleLevelUser extends SharedEntity {
  @ManyToOne(() => ModuleLevel)
  @JoinColumn([{ name: 'module_level_id' }])
  moduleslevels: ModuleLevel;

  @ManyToOne(() => User, (user) => user.modules)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
