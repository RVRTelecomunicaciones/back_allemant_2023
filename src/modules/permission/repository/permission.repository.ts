import { Repository } from 'typeorm';
import { CustomRepository } from '@app/typeorm/typeorm-ex.decorator';
import { FilterDto } from '@app/modules/role/dto/role.dto';
import { Permission } from '../entities/permission.entity';

@CustomRepository(Permission)
export class PermissionRepository extends Repository<Permission> {
  async filter(filter: FilterDto): Promise<Permission[]> {
    const { name } = filter;
    const query = this.createQueryBuilder('permission');

    if (name) {
      query.andWhere('lower(permission.name) LIKE :name', {
        name: `%${name.toLowerCase()}%`,
      });
    }

    return await query.getMany();
  }
}
