import { Module } from '@nestjs/common';
import { IUserRepository } from '../../../domain/interfaces/iusers-repository';
import { UserRepository } from './user-repository';
import { TypeORMDataService } from './typeorm-data-service.service';
import { InmemoryDataService } from './inmemory-data-service.service';

@Module({
  imports: [],
  providers: [
    UserRepository,
    {
      provide: IUserRepository,
      useClass:
        process.env.DB === 'test' ? InmemoryDataService : TypeORMDataService,
    },
  ],
  exports: [UserRepository],
})
export class UserRepositoryModule {}
