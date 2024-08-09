import { Get, Controller } from "@nestjs/common";
import { writeFile, readFile } from "fs";
import { promisify } from "util";

const writeFileProm = promisify(writeFile)
const readFileProm = promisify(readFile)

@Controller('deck')
export class deckController {

    @Get('/fetch-cards')
    async fetchCards() {
        const cardsRequest = await fetch('https://api.magicthegathering.io/v1/cards')
        const cardsBody = (await cardsRequest.json())

        await writeFileProm('fetched_cards.json', JSON.stringify(cardsBody))
        return { success: true }
    }

    @Get('/create-deck')
    async createDeck() {
        const cardstringfied = await readFileProm('fetched_cards.json', { encoding: 'utf-8' })
        const cardsObject = JSON.parse(cardstringfied).cards

        const commanders = cardsObject.filter(card => {
            card.type.includes('Legendary')
        })

        console.log(commanders)

        return { success: true, commanders }
    }

}