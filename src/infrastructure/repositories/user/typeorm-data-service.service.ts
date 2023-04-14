import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';
import { IUserRepository } from 'src/domain/interfaces/iusers-repository';
import { Repository,dataSource } from 'typeorm'
@Injectable()
export class TypeORMDataService extends Repository<User> implements IUserRepository {
  async findAll(): Promise<User[]> {
    // return Promise.resolve([new User(1, 'TypeORMs')]);
    const userRepository = dataSource.getRepository(User)
    return userRepository.
  }
  async find(id: number): Promise<User> {
    return Promise.resolve(new User(id, 'TypeORM'));
  }
}
