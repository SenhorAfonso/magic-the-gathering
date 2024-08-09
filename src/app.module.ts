import { Module } from '@nestjs/common';
import { deckModule } from './deck/deck.module';

@Module({
  imports: [deckModule]
})
export class AppModule {}
