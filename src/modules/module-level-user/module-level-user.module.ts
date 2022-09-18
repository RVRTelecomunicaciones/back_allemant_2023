import { Module } from '@nestjs/common';
import { ModuleLevelUserService } from './module-level-user.service';
import { ModuleLevelUserController } from './module-level-user.controller';

@Module({
  providers: [ModuleLevelUserService],
  controllers: [ModuleLevelUserController]
})
export class ModuleLevelUserModule {}
