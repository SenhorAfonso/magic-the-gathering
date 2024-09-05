import { Injectable } from '@nestjs/common';
import { UserBaseUseCase } from './user-base.usecase';

@Injectable()
export class UpdateUsernameUseCase extends UserBaseUseCase {
  async execute(id: string, payload: string) {
    const newInfo = { username: payload };
    const newUser = this.userRepository.updateUserUsername(id, newInfo);
    return newUser;
  }
}
