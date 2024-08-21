import { UserRepository } from 'src/infraestructure/repositories/user.repository';

export abstract class UserBaseUseCase {
  constructor(protected readonly userRepository: UserRepository) {}

  abstract execute(...args: any): any;
}
