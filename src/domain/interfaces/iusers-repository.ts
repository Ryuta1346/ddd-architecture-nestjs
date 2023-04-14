import { User } from '../entities/user.entity';

export abstract class IUserRepository {
  abstract findAll: () => Promise<User[]>;
  abstract findOneById: (id: number) => Promise<User>;
}
