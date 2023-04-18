import { Module } from '@nestjs/common';
import { PersonRepositoryModule } from 'infrastructure/repositories/posts/posts-repository.module';
import { SavePersonHandler } from './save-person.handler';

@Module({
  imports: [PersonRepositoryModule],
  providers: [SavePersonHandler],
  exports: [SavePersonHandler],
})
export class SavePersonsHandlerModule {}
