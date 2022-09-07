import type { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from '@app/snake-naming.strategy';
import { UserSubscriber } from '@app/entity-subscribers/user-subscriber';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { getEnvPath } from '@app/processors/helper/env.helper';

export const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

/* const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath })],
  useFactory: (configService: ConfigService) => {
    return {
      type: 'mysql',
      host: configService.get('DB_HOST'),
      port: configService.get('DB_PORT'),
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_DATABASE'),
      migrations: ['src/database/migrations/*{.ts,.js}'],
      migrationsTableName: 'migrations',
      synchronize: false,
      dropSchema: false,
    };
  },
  inject: [ConfigService],
}; */

const typeOrmAsyncConfig = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'allemant',
  entities: ['src/modules/**/**/*.entity.ts'],
  migrationsTableName: 'migrations',
  migrations: ['src/database/migrations/*{.ts,.js}'],
  namingStrategy: new SnakeNamingStrategy(),
  subscribers: [UserSubscriber],
});

export default typeOrmAsyncConfig;
