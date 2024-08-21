import { Module } from '@nestjs/common';
import { deckModule } from './modules/deck.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CardsModule } from './modules/cards.module';
import { UserModule } from './modules/user.module';
import { AuthModule } from './modules/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/magic-gathering'),
    deckModule,
    CardsModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
