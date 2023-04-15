import { Injectable } from '@nestjs/common';
import { Users } from 'src/domain/entities/user.entity';
import { IUserRepository } from 'src/domain/interfaces/iusers-repository';

@Injectable()
export class InmemoryDataService implements IUserRepository {
  private users: Users[] = [
    new Users(1, 'user1'),
    new Users(2, 'user2'),
    new Users(3, 'user3'),
  ];

  async findAll(): Promise<Users[]> {
    return Promise.resolve(this.users);
  }

  async findOneById(id: number): Promise<Users> {
    return Promise.resolve(this.users.find((u) => u.id === id));
  }
}
