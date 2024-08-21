import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { LoginUserUseCase } from 'src/application/use-cases/auth/login-user.usecase';
import { RegisterUserUseCase } from 'src/application/use-cases/auth/register-user.usecase';
import { AuthController } from 'src/infraestructure/controllers/auth.controller';

@Module({
  controllers: [AuthController],
  imports: [JwtModule.register({ global: true, secret: 'supersecretestring' })],
  providers: [RegisterUserUseCase, LoginUserUseCase],
})
export class AuthModule {}
