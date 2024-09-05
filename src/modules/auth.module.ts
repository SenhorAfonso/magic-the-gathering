import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { LoginUserUseCase } from 'src/application/use-cases/auth/login-user.usecase';
import { RegisterUserUseCase } from 'src/application/use-cases/auth/register-user.usecase';
import { AuthController } from 'src/infraestructure/controllers/auth.controller';
import { PasswordHash } from 'src/infraestructure/pipes/password-hash.pipe';
import { UserModule } from './user.module';

@Module({
  controllers: [AuthController],
  imports: [
    JwtModule.register({ global: true, secret: 'supersecretestring' }),
    UserModule,
  ],
  providers: [
    RegisterUserUseCase,
    LoginUserUseCase,
    PasswordHash,
    ConfigService,
  ],
})
export class AuthModule {}
