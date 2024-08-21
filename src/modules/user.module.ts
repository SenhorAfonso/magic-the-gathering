import { Module } from '@nestjs/common';
import { CreateUserUseCase } from 'src/application/use-cases/users/create-user.usecase';
import { GetUserByEmailUseCase } from 'src/application/use-cases/users/get-user-by-email.usecase';
import { UserController } from 'src/infraestructure/controllers/user.controller';

@Module({
  controllers: [UserController],
  providers: [CreateUserUseCase, GetUserByEmailUseCase],
})
export class UserModule {}
