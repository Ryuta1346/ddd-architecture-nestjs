import { Injectable } from '@nestjs/common';
import { Users } from 'src/domain/entities/user.entity';
import { IUserRepository } from 'src/domain/interfaces/iusers-repository';

@Injectable()
export class UserRepository {
  // IUserRepositoryはNestJSのDIの仕組みで容易に入れ替え可能
  constructor(private userRepo: IUserRepository) {}

  async find(id: number): Promise<Users> {
    return await this.userRepo.findOneById(id);
  }
  async findAll(): Promise<Users[]> {
    return await this.userRepo.findAll();
  }
}
