import { PipeTransform, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { ConfigService } from '@nestjs/config';
import { RegisterUserDto } from 'src/application/dtos/users/register-user.dto';

@Injectable()
export class PasswordHash implements PipeTransform {
  constructor(private readonly configService: ConfigService) {}

  async transform(value: RegisterUserDto) {
    if ('password' in value) {
      const salt: string = this.configService.get<string>('BCRYPT_SALT');
      const newPass = await bcrypt.hash(value.password, salt);

      return {
        ...value,
        password: newPass,
      };
    }

    return value;
  }
}
