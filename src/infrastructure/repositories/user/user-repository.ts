import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';
import { IUserRepository } from 'src/domain/interfaces/iusers-repository';

@Injectable()
export class UserRepository {
  constructor(private userRepo: IUserRepository) {}

  async find(id: number): Promise<User> {
    return await this.userRepo.find(id);
  }
  async findAll(): Promise<User[]> {
    return await this.userRepo.findAll();
  }
}
