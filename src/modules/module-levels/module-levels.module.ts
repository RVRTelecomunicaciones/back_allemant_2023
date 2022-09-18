import { Module } from '@nestjs/common';
import { ModuleLevelsService } from './module-levels.service';
import { ModuleLevelsController } from './module-levels.controller';

@Module({
  providers: [ModuleLevelsService],
  controllers: [ModuleLevelsController]
})
export class ModuleLevelsModule {}
