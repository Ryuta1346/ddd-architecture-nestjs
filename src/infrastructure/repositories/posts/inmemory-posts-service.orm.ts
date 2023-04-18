import { Injectable } from '@nestjs/common';
import { Person } from 'entities/person/person';

@Injectable()
export class InmemoryPostsDataService {
  private persons: Person[] = [
    new Person({ id: 1, name: 'user1' }),
    new Person({ id: 2, name: 'user1' }),
    new Person({ id: 3, name: 'user1' }),
  ];

  async findAll(): Promise<Person[]> {
    return Promise.resolve(this.persons);
  }

  async findOneById(id: number): Promise<Person> {
    return Promise.resolve(this.persons.find((u) => u.id === id));
  }
}
