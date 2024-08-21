import { Controller } from '@nestjs/common';
import { RegisterUserDto } from 'src/application/dtos/users/register-user.dto';
import { CreateUserUseCase } from 'src/application/use-cases/users/create-user.usecase';
import { GetUserByEmailUseCase } from 'src/application/use-cases/users/get-user-by-email.usecase';

@Controller()
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUserByEmailUseCase: GetUserByEmailUseCase,
  ) {}

  async createUser(payload: RegisterUserDto) {
    const user = await this.createUserUseCase.execute(payload);
    return user;
  }

  async getUserByEmail(email: string) {
    const user = await this.getUserByEmailUseCase.execute(email);
    return user;
  }
}
