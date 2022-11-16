import { CustomRepository } from '@app/typeorm/typeorm-ex.decorator';
import { Repository } from 'typeorm/repository/Repository';
import { ModuleLevelUser } from '../entities/module-level-user.entity';

@CustomRepository(ModuleLevelUser)
export class ModuleLevelUserRepository extends Repository<ModuleLevelUser> {}
