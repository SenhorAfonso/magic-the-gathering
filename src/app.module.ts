import { Module } from '@nestjs/common';
import { DeckModule } from './modules/deck.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CardsModule } from './modules/cards.module';
import { UserModule } from './modules/user.module';
import { AuthModule } from './modules/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/magic-gathering'),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DeckModule,
    CardsModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
