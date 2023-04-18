import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controller/users/users.controller';
import { UserRepositoryModule } from './infrastructure/repositories/user/user-repository.module';
import { UserUseCaseModule } from './application/usecases/user/user-usecase.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './person/person.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'ddd_user',
      password: 'password',
      database: 'ddd_verification',
      // entities,
      logging: true,
      synchronize: false,
    }),
    UserRepositoryModule,
    UserUseCaseModule,
    PersonModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserUseCaseModule],
})
export class AppModule {}
