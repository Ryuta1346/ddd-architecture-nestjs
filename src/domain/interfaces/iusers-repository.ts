import { Users } from 'domain/entities/user.entity';

export abstract class IUserRepository {
  abstract findAll: () => Promise<Users[]>;
  abstract findOneById: (id: number) => Promise<Users>;
  abstract insertEntity: (user: Users) => Promise<void>;
}
