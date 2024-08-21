import { CardDocument } from 'src/infraestructure/schemas/card.schema';
import { DeckBaseUseCase } from './deck.base-usecase';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateDeckUseCase extends DeckBaseUseCase {
  async execute() {
    const deck = new Set();
    const landDeck: CardDocument[] = [];

    const commander = await this.cardsRepository.getRandomCommander();
    deck.add(commander);

    const cards = await this.cardsRepository.findCardsByColor(commander.colors);
    const allLands = await this.cardsRepository.findLands();

    const basicLands = allLands.filter((land) => {
      return land.type.split(' ')[0] === 'Basic';
    });

    const specialLands = allLands.filter((land) => {
      return land.type.split(' ')[0] !== 'Basic';
    });

    while (deck.size + landDeck.length < 100) {
      const random = Math.ceil(Math.random() * 5);

      switch (random) {
        case 1:
          deck.add(cards[Math.ceil(Math.random() * cards.length)]);
          break;
        case 2:
          deck.add(
            specialLands[Math.ceil(Math.random() * specialLands.length)],
          );
          break;
        case 3:
          landDeck.push(basicLands[Math.ceil(Math.random() * landDeck.length)]);
          break;
        default:
          break;
      }
    }

    const result = [...deck, ...landDeck];
    return result;
  }
}
