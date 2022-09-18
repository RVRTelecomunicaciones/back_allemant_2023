import { Body, Controller, Delete, ForbiddenException, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { Auth } from '../auth/get-user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { CreateDto, FilterDto, UpdateDto } from './dto/role.dto';
import { Role } from './entities/role.entity';
import { RoleService } from './role.service';

@Controller('role')
@UseGuards(JwtAuthGuard)
export class RoleController {
  constructor(private readonly service: RoleService, private readonly userService: UsersService) {}

  /*@Get()
  async index(@Query() search: FilterDto, @Auth() user: User): Promise<Role[]> {
    const check = await this.userService.can(user, 'role-index');
    if (!check) {
      throw new ForbiddenException(`Permission denied !`);
    }

    return this.service.all(search);
  } */

  /*  @Post()
  async store(@Body() payload: CreateDto, @Auth() user: User): Promise<Role> {
    const check = await this.userService.can(user, 'role-create');
    if (!check) {
      throw new ForbiddenException(`Permission denied !`);
    }

    return this.service.create(payload);
  } */

  /*@Get('/:id')
   async show(@Param() id: number, @Auth() user: User): Promise<Role> {
    const check = await this.userService.can(user, 'role-show');
    if (!check) {
      throw new ForbiddenException(`Permission denied !`);
    }

    return this.service.find(id);
  } */
  /* @Put('/:id')
  async update(@Param() id: number, @Body() payload: UpdateDto, @Auth() user: User): Promise<Role> {
    const check = await this.userService.can(user, 'role-edit');
    if (!check) {
      throw new ForbiddenException(`Permission denied !`);
    }

    return this.service.update(id, payload);
  } */

  /* @Delete('/:id')
  async destroy(@Param() id: number, @Auth() user: User): Promise<void> {
    const check = await this.userService.can(user, 'role-delete');
    if (!check) {
      throw new ForbiddenException(`Permission denied !`);
    }

    return this.service.delete(id);
  } */
}
