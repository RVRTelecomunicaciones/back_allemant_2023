import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { v4 } from 'uuid';
import { UserRepository } from './repository/users.repository';

@Injectable()
export class UsersService {
    constructor(private userRepository: UserRepository) {}

    /* public async getUserEntityByUsername(username: string): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { username: username } });
  } */
    public async getUserEntityByEmail(email: string): Promise<User | undefined> {
        return await this.userRepository.findOne({ where: { email: email } });
    }

    public async getUserEntityById(id: number): Promise<User | null> {
        return this.userRepository.findOne({
            where: { id: id },
        });
    }
    create(dto: CreateUserDto) {
        return this.userRepository.save(dto);
    }

    signUp(dto: CreateUserDto) {
        const activationLink = v4();

        return this.userRepository.signUp(dto.name, dto.email, dto.password, activationLink);
    }

    findOne(findData: FindOptionsWhere<User>): Promise<User | null> {
        return this.userRepository.findOneBy(findData);
    }

    // eslint-disable-next-line @typescript-eslint/ban-types
    findByCondition(condition: Object) {
        return this.userRepository.findOne(condition);
    }

    async updateUser(userId: number, updateData: UpdateUserDto): Promise<User> {
        try {
            const user = await this.userRepository.findOne({ where: { id: userId } });
            if (!user) {
                throw new NotFoundException(
                    `Allemant Peritos le informa que el usuario con id "${userId}" no fue encontrado`
                );
            } else {
                return this.userRepository.save(updateData);
            }
        } catch (err) {
            throw new ConflictException();
        }
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return this.userRepository.update(id, updateUserDto);
    }

    async validateRegister(email: string): Promise<User> {
        try {
            const user = await this.userRepository.findOne({ where: { email: email } });

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
        const user = await this.userRepository.findOne({ where: { email: email } });

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
