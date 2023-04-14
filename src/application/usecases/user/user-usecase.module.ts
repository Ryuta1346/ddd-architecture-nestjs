import { Module } from '@nestjs/common';
import { UserQueryUseCase } from './user-query';
import { UserRepositoryModule } from 'src/infrastructure/repositories/user/user-repository.module';

@Module({
  imports: [UserRepositoryModule],
  providers: [UserQueryUseCase],
  exports: [UserQueryUseCase],
})
export class UserUseCaseModule {}
