import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controller/users/users.controller';
import { UserRepositoryModule } from './infrastructure/repositories/user/user-repository.module';
import { UserUseCaseModule } from './application/usecases/user/user-usecase.module';
@Module({
  imports: [UserRepositoryModule, UserUseCaseModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserUseCaseModule],
})
export class AppModule {}
