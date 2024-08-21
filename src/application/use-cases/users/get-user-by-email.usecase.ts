import { UserBaseUseCase } from './user-base.usecase';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetUserByEmailUseCase extends UserBaseUseCase {
  async execute(email: string) {
    const user = await this.userRepository.getUserByEmail(email);
    return user;
  }
}
