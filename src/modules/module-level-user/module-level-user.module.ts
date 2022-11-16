import { Module } from '@nestjs/common';
import { ModuleLevelUserService } from './module-level-user.service';
import { ModuleLevelUserController } from './module-level-user.controller';
import { TypeOrmExModule } from '@app/typeorm/typeorm-ex.module';
import { ModuleLevelUserRepository } from './repository/module-level-user.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([ModuleLevelUserRepository])],
  providers: [ModuleLevelUserService],
  controllers: [ModuleLevelUserController],
})
export class ModuleLevelUserModule {}
