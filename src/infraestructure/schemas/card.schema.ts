import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

class Legalities {
  @Prop()
  format: string;

  @Prop()
  legality: string;
}

@Schema()
export class Card {
  @Prop()
  name: string;

  @Prop()
  manaCost: string;

  @Prop()
  cmc: string;

  @Prop()
  colors: string[];

  @Prop()
  colorIdentity: string[];

  @Prop()
  type: string;

  @Prop()
  types: string[];

  @Prop()
  subtypes: string[];

  @Prop()
  rarity: string;

  @Prop()
  set: string;

  @Prop()
  setName: string;

  @Prop()
  text: string;

  @Prop()
  flavor: string;

  @Prop()
  artist: string;

  @Prop()
  number: string;

  @Prop()
  power: string;

  @Prop()
  toughness: string;

  @Prop()
  layout: string;

  @Prop()
  variations: string[];

  @Prop()
  printings: string[];

  @Prop()
  legalities: Legalities[];

  @Prop()
  id: string;
}

export const CardSchema = SchemaFactory.createForClass(Card);
export type CardDocument = HydratedDocument<Card>;
