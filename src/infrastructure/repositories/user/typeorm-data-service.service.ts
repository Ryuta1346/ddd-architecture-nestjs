import { Injectable } from '@nestjs/common';
import { AppDataSource } from 'data-source';
import { Users } from 'domain/entities/user.entity';
import { IUserRepository } from 'domain/interfaces/iusers-repository';

import { Repository } from 'typeorm';
@Injectable()
export class TypeORMDataService
  extends Repository<Users>
  implements IUserRepository
{
  async findAll(): Promise<Users[]> {
    const itemRepository = await AppDataSource.getRepository(Users).find();
    // const itemRepository = this.createQueryBuilder('user').getMany();
    return itemRepository;
  }
  async findOneById(id: number): Promise<Users> {
    const itemRepository = await AppDataSource.getRepository(Users).findOneBy({
      id,
    });
    return itemRepository;
  }
}
