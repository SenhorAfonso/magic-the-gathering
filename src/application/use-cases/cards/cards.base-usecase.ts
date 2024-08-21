import { CardsRepository } from 'src/infraestructure/repositories/cards.repository';

export abstract class CardsBaseUseCase {
  constructor(protected readonly cardsRepository: CardsRepository) {}

  abstract execute(...args: any): any;
}
