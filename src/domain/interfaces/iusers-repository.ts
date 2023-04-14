import { User } from '../entities/user.entity';

export abstract class IUserRepository {
  abstract getAll: () => Promise<User[]>;
  abstract getOne: (id: number) => Promise<User>;
}
