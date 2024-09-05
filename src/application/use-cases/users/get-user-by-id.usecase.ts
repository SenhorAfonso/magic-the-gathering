import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserBaseUseCase } from './user-base.usecase';
import { UserDocument } from 'src/infraestructure/schemas/user.schema';

@Injectable()
export class GetUserByIdUseCase extends UserBaseUseCase {
  async execute(id: string) {
    let user: UserDocument | null;

    try {
      user = await this.userRepository.getUserById(id);
    } catch (err) {
      throw new BadRequestException('Id format is invalid.');
    }

    if (!user) {
      throw new NotFoundException('Theres is no user with such id.');
    }

    return user;
  }
}
