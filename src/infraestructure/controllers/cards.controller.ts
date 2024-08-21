import {
  Controller,
  Get,
  InternalServerErrorException,
  UseGuards,
} from '@nestjs/common';
import { Roles } from 'src/common/decorators/user-roles.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { UserRoles } from 'src/infraestructure/schemas/user.schema';
import { PopulateDatabaseUseCase } from 'src/application/use-cases/cards/populate-database.usecase';

@Controller('cards')
export class CardsController {
  constructor(
    private readonly populateDatabaseUseCase: PopulateDatabaseUseCase,
  ) {}

  @Get('/populate')
  @Roles(UserRoles.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  async populateDatabase() {
    try {
      await this.populateDatabaseUseCase.execute();
    } catch (err) {
      throw new InternalServerErrorException();
    }
    return { success: true };
  }
}
