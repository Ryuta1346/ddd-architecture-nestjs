import { UsersEntity } from 'infrastructure/database/users.orm-entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'ddd_user',
  password: 'password',
  database: 'ddd_verification',
  entities: [UsersEntity],
  migrations: ['dist/migrations/*.{ts,js}'], // src配下を指定すると`Cannot use import statement outside a module`になるため /dist指定
  synchronize: false,
  cache: {
    type: 'ioredis', // ioredisをキャッシュストアとして使用
    options: {
      host: 'localhost',
      port: 6379,
    },
  },
  logging: true,
});
