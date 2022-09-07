import { Body, Controller, Delete, ForbiddenException, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { Auth } from '../auth/get-user.decorator';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { CreateDto, FilterDto, UpdateDto } from './dto/permission.dto';
import { Permission } from './entities/permission.entity';
import { PermissionService } from './permission.service';

@Controller('permission')
@UseGuards(JwtStrategy)
export class PermissionController {
  constructor(private readonly service: PermissionService, private readonly userService: UsersService) {}

  @Get()
  async index(@Query() filter: FilterDto, @Auth() user: User): Promise<Permission[]> {
    const check = await this.userService.can(user, 'except');
    if (!check) {
      throw new ForbiddenException(`Permission denied !`);
    }

    return this.service.all(filter);
  }

  @Get('/:id')
  async show(@Param('id') id: number, @Auth() user: User): Promise<Permission> {
    const check = await this.userService.can(user, 'except');
    if (!check) {
      throw new ForbiddenException(`Permission denied !`);
    }

    return await this.service.find(id);
  }

  @Post()
  async store(@Body() payload: CreateDto, @Auth() user: User): Promise<Permission> {
    const check = await this.userService.can(user, 'except');
    if (!check) {
      throw new ForbiddenException(`Permission denied !`);
    }

    return this.service.create(payload);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() payload: UpdateDto, @Auth() user: User): Promise<Permission> {
    const check = await this.userService.can(user, 'except');
    if (!check) {
      throw new ForbiddenException(`Permission denied !`);
    }

    return this.service.update(id, payload);
  }

  @Delete('/:id')
  async destroy(@Param('id') id: number, @Auth() user: User): Promise<void> {
    const check = await this.userService.can(user, 'except');
    if (!check) {
      throw new ForbiddenException(`Permission denied !`);
    }

    return this.service.delete(id);
  }
}
