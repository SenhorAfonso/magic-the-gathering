import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { RegisterUserDto } from 'src/application/dtos/users/register-user.dto';
import { AuthBaseUseCase } from './auth-base.usecase';

@Injectable()
export class RegisterUserUseCase extends AuthBaseUseCase {
  async execute(payload: RegisterUserDto) {
    const previousUser = this.getUserByEmail.execute(payload.email);

    if (previousUser) {
      throw new BadRequestException('Email already taken!');
    }

    const user = await this.createUserUseCase.execute(payload);

    if (!user) {
      throw new InternalServerErrorException();
    }

    const jwtPayload = {
      username: user.username,
      sub: user.id,
    };

    return {
      access_token: await this.jwtService.signAsync(jwtPayload),
    };
  }
}
