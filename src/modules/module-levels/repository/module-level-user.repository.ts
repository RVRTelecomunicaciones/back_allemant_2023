import { CustomRepository } from '@app/typeorm/typeorm-ex.decorator';
import { Repository } from 'typeorm/repository/Repository';
import { ModuleLevel } from '../entities/module-levels.entity';

@CustomRepository(ModuleLevel)
export class ModuleLevelRepository extends Repository<ModuleLevel> {}
