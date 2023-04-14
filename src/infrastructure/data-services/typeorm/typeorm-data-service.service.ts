import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';
import { IUserRepository } from 'src/domain/interfaces/iusers-repository';

@Injectable()
export class TypeORMDataService implements IUserRepository {
  async findAll(): Promise<User[]> {
    return Promise.resolve([new User(1, 'TypeORMs')]);
  }
  async find(id: number): Promise<User> {
    return Promise.resolve(new User(id, 'TypeORM'));
  }
}
