import { Module } from '@nestjs/common';
import { PersonRepositoryModule } from 'infrastructure/repositories/posts/posts-repository.module';
import { GetPersonsHandler } from './get-persons.handler';

@Module({
  imports: [PersonRepositoryModule],
  providers: [
    GetPersonsHandler,
    // PersonRepository,
    // {
    //   provide: IUserRepository,
    //   useClass:
    //     // 環境変数DB=testの場合は自動でInmemoryを使うように設定(CI時など)
    //     process.env.DB === 'test' ? InmemoryDataService : TypeORMDataService,
    // },
  ],
  exports: [GetPersonsHandler],
})
export class GetPersonsHandlerModule {}
