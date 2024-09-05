import { Injectable } from '@nestjs/common';
import { UserBaseUseCase } from './user-base.usecase';

@Injectable()
export class GetAllUsersUseCase extends UserBaseUseCase {
  async execute() {
    const users = await this.userRepository.getAllUsers();
    return users;
  }
}
