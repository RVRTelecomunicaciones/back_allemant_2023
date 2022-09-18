import { TypeOrmExModule } from '@app/typeorm/typeorm-ex.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleRepository } from '../module/repository/module.repository';
import { User } from './entities/user.entity';
import { UserRepository } from './repository/users.repository';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([UserRepository, ModuleRepository])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
