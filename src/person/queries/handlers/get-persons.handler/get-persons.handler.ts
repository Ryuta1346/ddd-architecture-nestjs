import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Person } from 'entities/person/person';
import { PersonRepository } from 'infrastructure/repositories/posts/posts-repository';
import { GetPersonsQuery } from 'person/queries/impl/get-persons.query/get-persons.query';

@QueryHandler(GetPersonsQuery)
export class GetPersonsHandler implements IQueryHandler<GetPersonsQuery> {
  constructor(
    // @InjectRepository(Person) private personRepo: Repository<Person>,
    private personRepo: PersonRepository,
  ) {}
  async execute(query: GetPersonsQuery): Promise<Person[]> {
    return await this.personRepo.findAll();
  }
}
