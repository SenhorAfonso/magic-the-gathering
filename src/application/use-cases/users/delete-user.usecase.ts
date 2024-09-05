import { UserDocument } from 'src/infraestructure/schemas/user.schema';
import { UserBaseUseCase } from './user-base.usecase';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class DeleteUserByIdUseCase extends UserBaseUseCase {
  async execute(id: string) {
    let user: UserDocument | null;

    try {
      await this.userRepository.deleteUserById(id);
    } catch (err) {
      throw new BadRequestException('id format is invalid.');
    }

    if (!user) {
      throw new NotFoundException('There is no user with such id.');
    }
  }
}
