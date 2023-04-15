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
        // 環境変数DB=testの場合は自動でInmemoryを使うように設定(CI時など)
        process.env.DB === 'test' ? InmemoryDataService : TypeORMDataService,
    },
  ],
  exports: [UserRepository],
})
export class UserRepositoryModule {}
