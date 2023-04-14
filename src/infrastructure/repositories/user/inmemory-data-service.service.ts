import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';
import { IUserRepository } from 'src/domain/interfaces/iusers-repository';

@Injectable()
export class InmemoryDataService implements IUserRepository {
  private users: User[] = [
    new User(1, 'user1'),
    new User(2, 'user2'),
    new User(3, 'user3'),
  ];

  async findAll(): Promise<User[]> {
    return Promise.resolve(this.users);
  }

  async findOneById(id: number): Promise<User> {
    return Promise.resolve(this.users.find((u) => u.id === id));
  }
}
