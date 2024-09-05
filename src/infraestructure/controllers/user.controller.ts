import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { DeleteUserByIdUseCase } from 'src/application/use-cases/users/delete-user.usecase';
import { GetAllUsersUseCase } from 'src/application/use-cases/users/get-all-users.usecase';
import { GetUserByIdUseCase } from 'src/application/use-cases/users/get-user-by-id.usecase';
import { UpdateUsernameUseCase } from 'src/application/use-cases/users/update-username.usecase';

@Controller('users')
export class UserController {
  constructor(
    private readonly getUserByIdUseCase: GetUserByIdUseCase,
    private readonly getAllUsersUseCase: GetAllUsersUseCase,
    private readonly deleteUserByIdUseCase: DeleteUserByIdUseCase,
    private readonly updateUsernameUseCase: UpdateUsernameUseCase,
  ) {}

  @Get('/:id')
  async getUserById(@Param('id') id: string) {
    const user = await this.getUserByIdUseCase.execute(id);
    return user;
  }

  @Get()
  async getAllUsers() {
    const users = await this.getAllUsersUseCase.execute();
    return users;
  }

  @Delete()
  async deleteUser(@Param('id') id: string) {
    await this.deleteUserByIdUseCase.execute(id);
  }

  @Patch()
  async updateUsername(@Param('id') id: string, @Body() payload: string) {
    const user = await this.updateUsernameUseCase.execute(id, payload);
    return user;
  }
}
