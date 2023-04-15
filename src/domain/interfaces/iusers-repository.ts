import { Users } from '../entities/user.entity';

export abstract class IUserRepository {
  abstract findAll: () => Promise<Users[]>;
  abstract findOneById: (id: number) => Promise<Users>;
}
