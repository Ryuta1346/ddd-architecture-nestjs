import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { PersonRepositoryModule } from 'infrastructure/repositories/posts/posts-repository.module';
import { CqrsModule } from '@nestjs/cqrs';
import { GetPersonsHandlerModule } from './queries/handlers/get-persons.handler/get-persions.module';
import { SavePersonsHandlerModule } from './commands/handler/save-person.handler/save-persions.module';

@Module({
  // imports: [TypeOrmModule.forFeature([Person])],
  imports: [
    PersonRepositoryModule,
    CqrsModule,
    GetPersonsHandlerModule,
    SavePersonsHandlerModule,
  ],
  controllers: [PersonController],
})
export class PersonModule {}
