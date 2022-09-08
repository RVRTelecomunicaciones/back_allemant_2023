import { User } from '@app/modules/users/entities/user.entity';
import { CustomRepository } from '@app/typeorm/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { FilterDto } from '../dto/role.dto';
import { Role } from '../entities/role.entity';

@CustomRepository(Role)
export class RoleRepository extends Repository<Role> {
  async filter(filter: FilterDto): Promise<Role[]> {
    const { name } = filter;
    const query = this.createQueryBuilder('role');

    if (name) {
      query.andWhere('lower(role.name) LIKE :name', {
        name: `%${name.toLowerCase()}%`,
      });
    }

    return await query.getMany();
  }
}
