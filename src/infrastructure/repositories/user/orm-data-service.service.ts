import { Injectable } from '@nestjs/common';
import { AppDataSource } from 'data-source';
import { Users } from 'domain/entities/user.entity';
import { IUserRepository } from 'domain/interfaces/iusers-repository';
import { UsersEntity } from 'infrastructure/database/users.orm-entity';

import { Repository } from 'typeorm';
@Injectable()
export class ORMDataService
  extends Repository<UsersEntity>
  implements IUserRepository
{
  async findAll(): Promise<Users[]> {
    const itemRepository = await AppDataSource.getRepository(UsersEntity).find({
      cache: {
        id: 'users_findAll',
        milliseconds: 1000 * 60 * 5,
      },
    });
    return itemRepository.map(
      (item) => new Users(item.id, item.firstName, item.lastName, item.age),
    );
  }
  async findOneById(id: number): Promise<Users> {
    const itemRepository = await AppDataSource.getRepository(
      UsersEntity,
    ).findOne({
      where: { id },
      cache: {
        id: `users_${id}`,
        milliseconds: 1000 * 60 * 5,
      },
    });

    return new Users(
      itemRepository.id,
      itemRepository.firstName,
      itemRepository.lastName,
      itemRepository.age,
    );
  }

  async insertEntity(user: UsersEntity): Promise<void> {
    await AppDataSource.getRepository(UsersEntity).insert(user);
    return;
  }
}
