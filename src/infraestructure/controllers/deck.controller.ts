import { Get, Controller, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { UserRoles } from 'src/infraestructure/schemas/user.schema';
import { Roles } from 'src/common/decorators/user-roles.decorator';
import { CreateDeckUseCase } from 'src/application/use-cases/decks/create-deck.usecase';

@UseGuards()
@Controller('deck')
export class deckController {
  constructor(private readonly createDeckUseCase: CreateDeckUseCase) {}

  @Get('/create-deck')
  @Roles(UserRoles.ADMIN, UserRoles.USER)
  @UseGuards(RolesGuard)
  async createDeck() {
    return this.createDeckUseCase.execute();
  }
}
