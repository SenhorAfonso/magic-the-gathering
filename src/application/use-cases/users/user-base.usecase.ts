import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/infraestructure/repositories/user.repository';

@Injectable()
export abstract class UserBaseUseCase {
  constructor(protected readonly userRepository: UserRepository) {}

  abstract execute(...args: any): any;
}
