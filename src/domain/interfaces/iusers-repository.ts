import { User } from '../entities/user.entity';

// export interface IUserRepository {
//   findAll: () => Promise<User[]>;
//   find: (id: number) => Promise<User>;
// }
export abstract class IUserRepository {
  abstract findAll: () => Promise<User[]>;
  abstract find: (id: number) => Promise<User>;
}
