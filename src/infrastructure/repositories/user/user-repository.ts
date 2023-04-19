import { Injectable } from '@nestjs/common';
import { Users } from '../../../domain/entities/user.entity';
import { IUserRepository } from '../../../domain/interfaces/iusers-repository';
import { validate } from 'class-validator';
import { async } from 'rxjs';

@Injectable()
export class UserRepository {
  // IUserRepositoryはNestJSのDIの仕組みで容易に入れ替え可能
  constructor(private userRepo: IUserRepository) {}

  async find(id: number): Promise<Users> {
    const userEntity = await this.userRepo.findOneById(id);
    return new Users(
      userEntity.id,
      userEntity.firstName,
      userEntity.lastName,
      userEntity.age,
    );
  }
  async findAll(): Promise<Users[]> {
    const users = await this.userRepo.findAll();

    return users.map(
      (user) => new Users(user.id, user.firstName, user.lastName, user.age),
    );
  }

  async save(user: Users): Promise<void> {
    await this.userRepo.insertEntity(user);
  }
}
