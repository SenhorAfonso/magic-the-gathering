import { Injectable } from '@nestjs/common';
import { UserBaseUseCase } from './user-base.usecase';
import { RegisterUserDto } from 'src/application/dtos/users/register-user.dto';

@Injectable()
export class CreateUserUseCase extends UserBaseUseCase {
  async execute(payload: RegisterUserDto) {
    const user = await this.userRepository.create(payload);
    return user;
  }
}
