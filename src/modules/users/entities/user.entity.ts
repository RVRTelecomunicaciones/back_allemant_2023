import { SharedEntity } from '@app/modules/shared/entities/shared.entity';
import { Exclude } from 'class-transformer';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  Unique,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';
import { Role } from '@app/modules/role/entities/role.entity';
import { UserModule } from '@app/modules/module/entities/module-user.entity';
import { ModuleLevelUser } from '@app/modules/module-level-user/entities/module-level-user.entity';

@Entity('user')
@Unique('mobile_email_unique', ['mobile', 'email'])
@Unique('email_deleted', ['email', 'deletedAt'])
@Unique('mobile_deleted', ['mobile', 'deletedAt'])
export class User extends SharedEntity {
  @Column({ nullable: true })
  name: string;

  @Index()
  @Column()
  email: string;

  @Index()
  @Column({
    type: 'varchar',
    nullable: true,
    length: 11,
    name: 'mobile',
  })
  mobile: string;

  @Column({
    type: 'varchar',
    length: 100,
    name: 'password',
  })
  password: string;

  @Column({ nullable: true, name: 'profile_photo' })
  profilePhoto: string;

  @Column({
    type: 'char',
    length: 36,
    nullable: true,
  })
  created_by: string;

  @Column({
    type: 'char',
    length: 36,
    nullable: true,
  })
  updated_by: string;

  @Column({ select: false, name: 'activation_link' })
  activationLink: string;

  @Column({ select: false, default: false, name: 'is_activated' })
  isActivated?: boolean;

  /* @ManyToOne(() => Role, { eager: true })
  @JoinColumn({ name: 'role_id' })
  role: Role; */

  @OneToMany(() => UserModule, (userToModule) => userToModule.user, {})
  modules: UserModule[];

  @OneToMany(() => ModuleLevelUser, (mleveluser) => mleveluser.user)
  public moduleLevelConn!: ModuleLevelUser[];

  /*   @OneToMany(() => UserModule, (userToModule) => userToModule.user, {})
  moduleslevels: UserModule[]; */

  @ManyToMany(() => Role, (role) => role.users, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinTable({
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'role_id',
      referencedColumnName: 'id',
    },
  })
  roles: Role[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    if (this.password !== undefined) {
      try {
        this.password = await bcrypt.hash(this.password, 10);
      } catch (error) {
        console.log('hashPassword error', error);
        throw new InternalServerErrorException();
      }
    }
  }

  async checkPassword(password: string): Promise<boolean> {
    try {
      const isCorrectPassword = await bcrypt.compare(password, this.password);
      return isCorrectPassword;
    } catch (error) {
      console.log('checkPassword error', error);
      throw new InternalServerErrorException();
    }
  }
}
