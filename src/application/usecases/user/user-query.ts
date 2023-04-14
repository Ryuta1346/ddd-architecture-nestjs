import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';
import { UserRepository } from 'src/infrastructure/repositories/user/user-repository';

@Injectable()
export class UserQueryUseCase {
  constructor(private userRepo: UserRepository) {}

  async find(id: number): Promise<User> {
    return this.userRepo.find(id);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepo.findAll();
    // return Promise.resolve('test');
  }
}
