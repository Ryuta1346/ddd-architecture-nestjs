import { Module } from '@nestjs/common';
import { PersonRepository } from './posts-repository';

@Module({
  imports: [],
  providers: [
    PersonRepository,
    // {
    //   provide: IUserRepository,
    //   useClass:
    //     // 環境変数DB=testの場合は自動でInmemoryを使うように設定(CI時など)
    //     process.env.DB === 'test' ? InmemoryDataService : TypeORMDataService,
    // },
  ],
  exports: [PersonRepository],
})
export class PersonRepositoryModule {}
