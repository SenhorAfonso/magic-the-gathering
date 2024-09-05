import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateUserUseCase } from 'src/application/use-cases/users/create-user.usecase';
import { DeleteUserByIdUseCase } from 'src/application/use-cases/users/delete-user.usecase';
import { GetAllUsersUseCase } from 'src/application/use-cases/users/get-all-users.usecase';
import { GetUserByEmailUseCase } from 'src/application/use-cases/users/get-user-by-email.usecase';
import { GetUserByIdUseCase } from 'src/application/use-cases/users/get-user-by-id.usecase';
import { UpdateUsernameUseCase } from 'src/application/use-cases/users/update-username.usecase';
import { UserController } from 'src/infraestructure/controllers/user.controller';
import { UserRepository } from 'src/infraestructure/repositories/user.repository';
import { User, UserSchema } from 'src/infraestructure/schemas/user.schema';

@Module({
  controllers: [UserController],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [
    UserRepository,
    CreateUserUseCase,
    GetUserByEmailUseCase,
    GetUserByIdUseCase,
    GetAllUsersUseCase,
    DeleteUserByIdUseCase,
    UpdateUsernameUseCase,
  ],
  exports: [
    GetUserByEmailUseCase,
    CreateUserUseCase,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
})
export class UserModule {}
