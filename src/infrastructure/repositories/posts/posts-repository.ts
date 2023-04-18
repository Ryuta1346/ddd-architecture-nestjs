import { Person } from 'entities/person/person';

export class PersonRepository {
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

  async save(person: Person): Promise<any> {
    return new Promise((resolve) => resolve(this.persons.push(person)));
  }
}
