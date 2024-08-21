import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Card, CardDocument } from '../schemas/card.schema';
import { Model } from 'mongoose';

@Injectable()
export class CardsRepository {
  constructor(
    @InjectModel(Card.name) private readonly cardsModel: Model<Card>,
  ) {}

  async save(payload: Array<CardDocument>) {
    await this.cardsModel.create(payload);
  }

  async flushAll() {
    await this.cardsModel.deleteMany({});
  }

  async getRandomCommander(): Promise<CardDocument> {
    const regex = new RegExp('Legendary', 'i');
    const commanders = await this.cardsModel.find({ type: { $regex: regex } });

    const random = Math.floor(Math.random() * commanders.length);
    return commanders[random];
  }

  async findCardsByColor(color: string | string[]): Promise<CardDocument[]> {
    if (Array.isArray(color)) {
      const result: CardDocument[] = [];

      await Promise.all(
        color.map(async (color) => {
          const colors = await this.cardsModel.find({ colors: color });

          colors.forEach((fetchedColor) => {
            result.push(fetchedColor);
          });
        }),
      );

      return result;
    } else {
      return this.cardsModel.find({ colors: color });
    }
  }

  async findLands(): Promise<CardDocument[]> {
    return this.cardsModel.find({ types: 'Land' });
  }
}
