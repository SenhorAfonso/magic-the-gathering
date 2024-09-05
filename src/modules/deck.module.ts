import { Module } from '@nestjs/common';
import { deckController } from '../infraestructure/controllers/deck.controller';
import { CardsModule } from 'src/modules/cards.module';
import { CreateDeckUseCase } from 'src/application/use-cases/decks/create-deck.usecase';

@Module({
  controllers: [deckController],
  providers: [CreateDeckUseCase],
  imports: [CardsModule],
})
export class DeckModule {}
