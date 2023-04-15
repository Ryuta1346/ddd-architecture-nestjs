import { Controller, Get } from '@nestjs/common';
import { Users } from '../../domain/entities/user.entity';
import { UserQueryUseCase } from 'src/application/usecases/user/user-query';

@Controller('api/users')
export class UserController {
  constructor(private userQueryUsecase: UserQueryUseCase) {}

  //   @Get('/:id')
  //   async find(id: number): Promise<User> {
  //     console.log('controller-find');
  //     // return this.userQueryUsecase.find(id);
  //   }

  @Get()
  async findAll(): Promise<Users[]> {
    console.log('controller-findAll');
    return this.userQueryUsecase.findAll();
    // return { response: 'test' };
  }
}
