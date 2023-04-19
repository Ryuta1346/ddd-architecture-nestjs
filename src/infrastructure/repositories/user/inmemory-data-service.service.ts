import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../../../domain/interfaces/iusers-repository';
import { Users } from 'domain/entities/user.entity';

@Injectable()
export class InmemoryDataService implements IUserRepository {
  private users: Users[] = [
    new Users(1, 'first1aaaaaaaaaaaaaaaaa', 'last1', 30),
    new Users(1, 'first2', 'last2', 30),
    new Users(1, 'first3', 'last3', 150),
  ];

  async findAll(): Promise<Users[]> {
    return Promise.resolve(this.users);
  }

  async findOneById(id: number): Promise<Users> {
    return Promise.resolve(this.users.find((u) => u.id === id));
  }

  async insertEntity(user: Users): Promise<void> {
    await Promise.resolve(this.users.push(user));
    return;
  }
}
