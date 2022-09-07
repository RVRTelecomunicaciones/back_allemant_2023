import { CustomRepository } from '@app/typeorm/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { FilterDto } from '../dto/filter-user.dto';
import { User } from '../entities/user.entity';

@CustomRepository(User)
export class UserRepository extends Repository<User> {
  async filter(filter: FilterDto): Promise<User[]> {
    const { name, email } = filter;

    const query = this.createQueryBuilder('user');
    // Implement where auth user id
    // .where(
    //   'user.id = :id',
    //   { id: user.id },
    // );

    if (name) {
      query.andWhere('lower(user.name) LIKE :name', {
        name: `%${name.toLowerCase()}%`,
      });
    }

    if (email) {
      query.andWhere('lower(user.email) LIKE :email', {
        email: `%${email.toLowerCase()}`,
      });
    }

    return await query.getMany();
  }
}
