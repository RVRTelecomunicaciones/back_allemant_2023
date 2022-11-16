import { Module } from '@nestjs/common';
import { ModuleLevelsService } from './module-levels.service';
import { ModuleLevelsController } from './module-levels.controller';
import { TypeOrmExModule } from '@app/typeorm/typeorm-ex.module';
import { ModuleLevelRepository } from './repository/module-level-user.repository';
import { UserRepository } from '../users/repository/users.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([ModuleLevelRepository, UserRepository])],
  providers: [ModuleLevelsService],
  controllers: [ModuleLevelsController],
})
export class ModuleLevelsModule {}
