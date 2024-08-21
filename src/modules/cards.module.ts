import { Module } from '@nestjs/common';
import { CardsController } from '../infraestructure/controllers/cards.controller';
import { CardsRepository } from '../infraestructure/repositories/cards.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Card, CardSchema } from '../infraestructure/schemas/card.schema';
import { PopulateDatabaseUseCase } from 'src/application/use-cases/cards/populate-database.usecase';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Card.name, schema: CardSchema }]),
  ],
  controllers: [CardsController],
  providers: [CardsRepository, PopulateDatabaseUseCase],
  exports: [CardsRepository],
})
export class CardsModule {}
