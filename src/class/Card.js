class Card {
  constructor() {
    this.src = '';
    this.name = '';
  }

  // card object method, returns true if name of two cards are equal
  matched(card) {
    if (this.name === card.name) {
      return true;
    }
    return false;
  }
}

export default Card;
