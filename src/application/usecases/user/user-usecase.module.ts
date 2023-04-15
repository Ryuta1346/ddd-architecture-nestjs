import { Module } from '@nestjs/common';
import { UserRepositoryModule } from 'infrastructure/repositories/user/user-repository.module';
import { UserQueryUseCase } from './user-query';

@Module({
  imports: [UserRepositoryModule],
  providers: [UserQueryUseCase],
  exports: [UserQueryUseCase],
})
export class UserUseCaseModule {}
