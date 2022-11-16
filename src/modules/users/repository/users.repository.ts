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

  async findOneByEmail(email: string): Promise<User> {
    return await this.findOneByEmail(email);
  }
  async getUserByEmail(email: string) {
    return this.findOneOrFail({ where: { email } });
  }

  async signUp(name: string, email: string, password: string, activationLink: string): Promise<User> {
    return await this.save({ name, email, password, activationLink });
  }
}
