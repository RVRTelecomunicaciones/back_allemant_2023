import { CustomRepository } from '@app/typeorm/typeorm-ex.decorator';
import { Repository } from 'typeorm/repository/Repository';
import { UserModule } from '../entities/module-user.entity';

@CustomRepository(UserModule)
export class UserModuleRepository extends Repository<UserModule> {}
