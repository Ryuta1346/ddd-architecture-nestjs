import { Injectable } from '@nestjs/common';
import { Users } from 'src/domain/entities/user.entity';
import { UserRepository } from 'src/infrastructure/repositories/user/user-repository';

@Injectable()
export class UserQueryUseCase {
  constructor(private userRepo: UserRepository) {}

  async find(id: number): Promise<Users> {
    return this.userRepo.find(id);
  }

  async findAll(): Promise<Users[]> {
    return await this.userRepo.findAll();
  }
}
