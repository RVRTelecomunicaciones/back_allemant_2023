import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './repository/users.repository';

@Injectable()
export class UsersService {
  constructor(private users: UserRepository) {}

  public async getUserEntityByUsername(username: string): Promise<User | undefined> {
    return await this.users.findOne({ where: { username: username } });
  }

  public async getUserEntityById(id: number): Promise<User | null> {
    return this.users.findOne({
      where: { id: id },
    });
  }
  create(dto: CreateUserDto) {
    return this.users.save(dto);
  }
  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  findByCondition(condition: Object) {
    return this.users.findOne(condition);
  }

  async updateUser(userId: number, updateData: UpdateUserDto): Promise<User> {
    try {
      const user = await this.users.findOne({ where: { id: userId } });
      if (!user) {
        throw new NotFoundException(`Allemant Peritos le informa que el usuario con id "${userId}" no fue encontrado`);
      } else {
        return this.users.save(updateData);
      }
    } catch (err) {
      throw new ConflictException();
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.users.update(id, updateUserDto);
  }

  async validateRegister(email: string): Promise<User> {
    try {
      const user = await this.users.findOne({ where: { email: email } });

      if (!user) {
        throw new NotFoundException(
          `Allemant Peritos le informa que el usuario con email "${email}" no fue encontrado`
        );
      } else {
        return user;
      }
    } catch (error) {
      throw new ConflictException();
    }
  }
  async validateLogin(email: string, password: string): Promise<User> {
    const user = await this.users.findOne({ where: { email: email } });

    if (user && (await user.checkPassword(password))) {
      return user;
    }
    return null;
  }
  /* async can(user: User, action: string): Promise<boolean> {
    if (action == 'except') {
      return true;
    }

    const result = user.role.permissions.filter((permission) => {
      return permission.name == action;
    });

    if (result.length > 0) {
      return true;
    }
    return false;
  } */
}
