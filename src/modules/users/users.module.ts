import { TypeOrmExModule } from '@app/typeorm/typeorm-ex.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleLevelRepository } from '../module-levels/repository/module-level-user.repository';
import { ModuleRepository } from '../module/repository/module.repository';
import { UserRepository } from './repository/users.repository';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([UserRepository, ModuleRepository, ModuleLevelRepository])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
