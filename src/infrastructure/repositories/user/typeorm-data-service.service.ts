import { Injectable } from '@nestjs/common';
import { Users } from 'src/domain/entities/user.entity';
import { IUserRepository } from 'src/domain/interfaces/iusers-repository';
import { AppDataSource } from 'src/infrastructure/data-source';
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
    const itemRepository = await this.createQueryBuilder('user')
      .where('user.id = :id', { id })
      .getOne();
    return itemRepository;
  }
}
