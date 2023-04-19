import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserQueryUseCase } from 'application/usecases/user/user-query';
import { Users } from '../../domain/entities/user.entity';
@Controller('api/users')
export class UserController {
  constructor(private userQueryUsecase: UserQueryUseCase) {}

  @Get('/:id')
  async find(@Param() param: { id: number }): Promise<Users> {
    console.log('controller-find');
    return this.userQueryUsecase.find(param.id);
  }

  @Get()
  // @UsePipes(new ValidationPipe({ transform: true }))
  async findAll(): Promise<Users[]> {
    const users = await this.userQueryUsecase.findAll();
    return users;
  }

  @Post()
  // @UsePipes(new ValidationPipe({ transform: true }))
  async save(@Body() body: Users): Promise<void> {
    await this.userQueryUsecase.save(body);
    return;
  }
}
