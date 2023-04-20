import { Module } from '@nestjs/common';
import { IUserRepository } from '../../../domain/interfaces/iusers-repository';
import { ORMDataService } from './orm-data-service.service';
import { InmemoryDataService } from './inmemory-data-service.service';

@Module({
  imports: [],
  providers: [
    {
      provide: IUserRepository,
      useClass:
        process.env.DB === 'test' ? InmemoryDataService : ORMDataService,
    },
  ],
  exports: [IUserRepository],
})
export class UserRepositoryModule {}
