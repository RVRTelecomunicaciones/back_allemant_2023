"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envFilePath = void 0;
const snake_naming_strategy_1 = require("../snake-naming.strategy");
const user_subscriber_1 = require("../entity-subscribers/user-subscriber");
const typeorm_1 = require("typeorm");
const env_helper_1 = require("../processors/helper/env.helper");
exports.envFilePath = (0, env_helper_1.getEnvPath)(`${__dirname}/common/envs`);
const typeOrmAsyncConfig = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'allemant',
    entities: ['src/modules/**/**/*.entity.ts'],
    migrationsTableName: 'migrations',
    migrations: ['src/database/migrations/*{.ts,.js}'],
    namingStrategy: new snake_naming_strategy_1.SnakeNamingStrategy(),
    subscribers: [user_subscriber_1.UserSubscriber],
});
exports.default = typeOrmAsyncConfig;
//# sourceMappingURL=typeorm.config.js.map