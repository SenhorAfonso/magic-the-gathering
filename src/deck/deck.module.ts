import { Module } from "@nestjs/common";
import { deckController } from "./deck.controller";

@Module({
    controllers: [deckController]
})
export class deckModule {}