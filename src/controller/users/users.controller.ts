import { Controller, Get } from '@nestjs/common';
import { UserQueryUseCase } from 'application/usecases/user/user-query';
import { Users } from '../../domain/entities/user.entity';
@Controller('api/users')
export class UserController {
  constructor(private userQueryUsecase: UserQueryUseCase) {}

  @Get('/:id')
  async find(id: number): Promise<Users> {
    console.log('controller-find');
    return this.userQueryUsecase.find(id);
  }

  @Get()
  async findAll(): Promise<Users[]> {
    console.log('controller-findAll');
    return this.userQueryUsecase.findAll();
    // return { response: 'test' };
  }
}
