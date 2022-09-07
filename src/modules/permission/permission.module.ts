import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../users/repository/users.repository';
import { UsersService } from '../users/users.service';
import { Permission } from './entities/permission.entity';
import { PermissionController } from './permission.controller';
import { PermissionService } from './permission.service';
import { PermissionRepository } from './repository/permission.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PermissionRepository, UserRepository])],
  providers: [PermissionService, UsersService],
  controllers: [PermissionController],
  exports: [PermissionService],
})
export class PermissionModule {}
