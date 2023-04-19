import { Injectable } from '@nestjs/common';
import { Users } from 'domain/entities/user.entity';
import { UserRepository } from 'infrastructure/repositories/user';

@Injectable()
export class UserQueryUseCase {
  constructor(private userRepo: UserRepository) {}

  async find(id: number): Promise<Users> {
    return this.userRepo.find(id);
  }

  async findAll(): Promise<Users[]> {
    return await this.userRepo.findAll();
  }

  async save(user: Users): Promise<void> {
    await this.userRepo.save(user);
  }
}
