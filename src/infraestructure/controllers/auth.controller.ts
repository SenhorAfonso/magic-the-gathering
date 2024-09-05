import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { RegisterUserDto } from 'src/application/dtos/users/register-user.dto';
import { LoginUserDto } from 'src/application/dtos/users/login-user.dto';
import { RegisterUserUseCase } from 'src/application/use-cases/auth/register-user.usecase';
import { LoginUserUseCase } from 'src/application/use-cases/auth/login-user.usecase';
import { PasswordHash } from '../pipes/password-hash.pipe';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly registerUserUseCase: RegisterUserUseCase,
    private readonly loginUserUseCase: LoginUserUseCase,
  ) {}

  @Post('/register')
  @UsePipes(PasswordHash)
  async registerUser(@Body() registerUserDto: RegisterUserDto) {
    const access_token =
      await this.registerUserUseCase.execute(registerUserDto);
    return access_token;
  }

  @Post('/login')
  async loginUser(@Body() loginUserDto: LoginUserDto) {
    const access_token = await this.loginUserUseCase.execute(loginUserDto);
    return access_token;
  }
}
