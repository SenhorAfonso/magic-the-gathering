import { LoginUserDto } from 'src/application/dtos/users/login-user.dto';
import { AuthBaseUseCase } from './auth-base.usecase';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class LoginUserUseCase extends AuthBaseUseCase {
  async execute(payload: LoginUserDto) {
    const user = await this.getUserByEmailUseCase.execute(payload.email);

    if (user.password !== payload.password) {
      throw new BadRequestException('Email already taken!');
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
