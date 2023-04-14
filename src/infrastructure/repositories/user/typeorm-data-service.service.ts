import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';
import { IUserRepository } from 'src/domain/interfaces/iusers-repository';
import { getRepository, Repository } from 'typeorm';
@Injectable()
export class TypeORMDataService
  extends Repository<User>
  implements IUserRepository
{
  async getAll(): Promise<User[]> {
    // TODO: DataSourceに変更
    const itemRepository = getRepository(User).find();
    return itemRepository;
  }
  async getOne(id: number): Promise<User> {
    const itemRepository = getRepository(User).findOneBy({ id });
    return itemRepository;
  }
}
