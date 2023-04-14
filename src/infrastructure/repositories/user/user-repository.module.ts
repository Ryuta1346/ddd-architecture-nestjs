import { Module } from '@nestjs/common';
import { InmemoryDataService } from 'src/infrastructure/data-services/inmemory/inmemory-data-service.service';
import { IUserRepository } from 'src/domain/interfaces/iusers-repository';
import { UserRepository } from './user-repository';
import { TypeORMDataService } from 'src/infrastructure/data-services/typeorm/typeorm-data-service.service';

@Module({
  imports: [],
  providers: [
    UserRepository,
    { provide: IUserRepository, useClass: TypeORMDataService },
  ],
  exports: [UserRepository],
})
export class UserRepositoryModule {}
