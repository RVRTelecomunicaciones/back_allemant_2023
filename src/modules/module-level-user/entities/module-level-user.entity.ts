import { ModuleLevel } from '@app/modules/module-levels/entities/module-levels.entity';
import { SharedEntity } from '@app/modules/shared/entities/shared.entity';
import { User } from '@app/modules/users/entities/user.entity';
import { Column, Entity, Index, JoinColumn, JoinTable, ManyToOne } from 'typeorm';

@Entity()
export class ModuleLevelUser extends SharedEntity {
    @ManyToOne(() => ModuleLevel, (mlevel) => mlevel.userConn, { nullable: false })
    public moduleLevel!: ModuleLevel;

    @ManyToOne(() => User, (user) => user.moduleLevelConn, { nullable: false })
    public user!: User;
}
