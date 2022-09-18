import { Module } from '@nestjs/common';
import { ModuleService } from './module.service';
import { ModuleController } from './module.controller';
import { TypeOrmExModule } from '@app/typeorm/typeorm-ex.module';
import { ModuleRepository } from './repository/module.repository';
import { UserModuleRepository } from './repository/module-user.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([ModuleRepository, UserModuleRepository])],
  providers: [ModuleService],
  controllers: [ModuleController],
  exports: [ModuleService],
})
export class ModuleModule {}
