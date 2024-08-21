import { CardsBaseUseCase } from './cards.base-usecase';
import { CardDocument } from 'src/infraestructure/schemas/card.schema';
import { Injectable } from '@nestjs/common';

interface ICardsRequest {
  cards: CardDocument[];
}

@Injectable()
export class PopulateDatabaseUseCase extends CardsBaseUseCase {
  async execute() {
    await this.cardsRepository.flushAll();

    for (let i = 1; i < 201; i++) {
      const cardsJson = await this.fetchCards(i);
      await this.cardsRepository.save(cardsJson.cards);
    }
  }

  private async fetchCards(page: number = 1): Promise<ICardsRequest> {
    const cardsRequest = await fetch(
      `https://api.magicthegathering.io/v1/cards?page=${page}`,
    );
    const cardsBody = (await cardsRequest.json()) as ICardsRequest;
    return cardsBody;
  }
}
