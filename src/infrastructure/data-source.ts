import { Users } from 'src/domain/entities/user.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'ddd_user',
  password: 'password',
  database: 'ddd_verification',
  entities: [Users],
  migrations: ['src/migrations/**/*.ts'],
  //   cli: {
  //     migrationsDir: 'src/migrations',
  //   },
  synchronize: false,
});
