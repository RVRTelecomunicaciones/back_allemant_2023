import { TypeOrmExModule } from '@app/typeorm/typeorm-ex.module';
import { Module } from '@nestjs/common';
import { PermissionRepository } from '../permission/repository/permission.repository';
import { UserRepository } from '../users/repository/users.repository';
import { UsersService } from '../users/users.service';
import { RoleRepository } from './repository/role.repository';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([RoleRepository]), PermissionRepository, UserRepository],
  providers: [RoleService, UsersService],
  controllers: [RoleController],
  exports: [RoleService],
})
export class RoleModule {}
