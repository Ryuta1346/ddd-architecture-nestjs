import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';
import { IUserRepository } from 'src/domain/interfaces/iusers-repository';
import { Repository } from 'typeorm';
@Injectable()
export class TypeORMDataService
  extends Repository<User>
  implements IUserRepository
{
  async findAll(): Promise<User[]> {
    const itemRepository = this.createQueryBuilder('user').getMany();
    return itemRepository;
  }
  async findOneById(id: number): Promise<User> {
    const itemRepository = this.createQueryBuilder('user')
      .where('user.id = :id', { id })
      .getOne();
    return itemRepository;
  }
}
