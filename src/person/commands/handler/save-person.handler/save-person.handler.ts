import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Person } from 'entities/person/person';
import { PersonRepository } from 'infrastructure/repositories/posts/posts-repository';
import { SavePersonCommand } from 'person/commands/impl/save-person.command/save-person.command';

@CommandHandler(SavePersonCommand)
export class SavePersonHandler implements ICommandHandler<SavePersonCommand> {
  constructor(
    // @InjectRepository(Person) private personRepo: Repository<Person>,
    private personRepo: PersonRepository,
  ) {}
  async execute(command: SavePersonCommand) {
    const person = new Person({
      id: Math.floor(Math.random() * 100),
      age: command.age,
      name: command.name,
    });
    console.log(person);
    await this.personRepo.save(person);
  }
}
