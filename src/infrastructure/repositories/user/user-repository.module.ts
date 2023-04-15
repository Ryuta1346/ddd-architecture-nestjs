import { Module } from '@nestjs/common';
import { IUserRepository } from 'src/domain/interfaces/iusers-repository';
import { UserRepository } from './user-repository';
import { TypeORMDataService } from './typeorm-data-service.service';
import { InmemoryDataService } from './inmemory-data-service.service';

@Module({
  imports: [],
  providers: [
    UserRepository,
    { provide: IUserRepository, useClass: TypeORMDataService },
  ],
  exports: [UserRepository],
})
export class UserRepositoryModule {}
