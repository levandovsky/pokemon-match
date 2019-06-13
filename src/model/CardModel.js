import cards from '../data/CardData';
import shuffle from '../helpers/shuffle';
import Card from '../class/Card';
import getRandomInt from '../helpers/random';

class CardModel {
  constructor() {
    this.cards = cards;
    this.numberOfCards = this.cards.length * 2;
  }

  getCards() {
    // declare arrays to store generated pairs and used numbers for unique array generation
    const cardArray = [];
    const usedNumbers = [];

    while (cardArray.length < this.numberOfCards) {
      // random number for a pair of cards
      const randomNumber = getRandomInt(0, this.cards.length);

      // check if this number was already used
      if (!usedNumbers.includes(randomNumber)) {
        const randomCard = this.cards[randomNumber];

        // push used number to the array
        usedNumbers.push(randomNumber);

        // generate first card
        const firstCard = new Card();
        firstCard.src = randomCard.src;
        firstCard.name = randomCard.name;

        // push first card to the array
        cardArray.push(firstCard);

        // generate second card
        const secondCard = new Card();
        secondCard.src = randomCard.src;
        secondCard.name = randomCard.name;

        // push second card to the array
        cardArray.push(secondCard);
      }
    }

    // shuffle complete arrray and return it for usage
    return shuffle(cardArray);
  }
}

export default CardModel;
