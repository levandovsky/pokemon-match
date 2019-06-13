import CardModel from './model/CardModel';

// define constants
const cardModel = new CardModel();
const cardArray = cardModel.getCards();
const gameContainer = document.getElementById('game-container');
const start = document.getElementById('start');
const retry = document.getElementById('retry');
const menu = document.getElementById('menu');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const movesHtml = document.getElementById('moves');
const body = document.getElementById('body');

// initial display of the game container is none
gameContainer.style.display = 'none';

// variables to record game board status
let firstCard;
let secondCard;
let wasFlipped = false;
let moves = 0;
let matched = [];

function init() {
  // shows the game container
  gameContainer.removeAttribute('style');

  // main game function
  cardArray.forEach(card => {
    // create card elements
    const divCard = document.createElement('div');
    const divCardInner = document.createElement('div');
    const divFront = document.createElement('div');
    const divBack = document.createElement('div');

    // structure cards inner elements
    divCard.classList.add('card');
    divCard.append(divCardInner);
    divCardInner.classList.add('card-inner');
    divFront.classList.add('front');
    divBack.classList.add('back');

    // bacground image taken from cards data set
    divBack.style.backgroundImage = `url(${card.src})`;

    // finally append elements to the game board
    divCardInner.append(divFront, divBack);
    gameContainer.append(divCard);

    divCardInner.addEventListener('click', () => {
      // if the state of the board wasFlipped is false, that means that first card will be flipped
      if (!wasFlipped) {
        firstCard = card;

        // show the card
        showFace();

        // push the card to the matched array and set board state wasFlipped to true(temp)
        matched.push(divCard);
        wasFlipped = true;

        // count move
        moves++;

        // else the second card was flipped
      } else {
        secondCard = card;
        // show the card
        showFace();

        // set state to false and check the condition (also count move)
        wasFlipped = false;
        moves++;

        // if card names match push the second card to the matched array
        if (firstCard.matched(secondCard)) {
          matched.push(divCard);

          // reset board variables
          resetVars();

          // adds grayscale filter to already matched cards
          matched.forEach(card => {
            setTimeout(() => {
              card.style.filter = 'grayscale()';
            }, 500);
          });

          // if card names do not match
        } else {
          // reset variables
          resetVars();
          // delete last element of the matched array
          matched.pop();
          // flip cards back
          resetBoard();
        }
      }

      // show game over screen
      gameOverScreen();
    });

    // shows the card face and blocks pointer events so it can not be clicked 2 times
    function showFace() {
      divCardInner.classList.add('active-card');
      divCard.style.pointerEvents = 'none';
    }

    // set board card variables to null for next assignment
    function resetVars() {
      firstCard = null;
      secondCard = null;
    }

    // show game over screen
    function gameOverScreen() {
      // winning condition is based on how many card were matched
      if (matched.length === 12) {
        // shows game over modal with the number of moves that were made
        movesHtml.innerHTML = `You made <span class="red">${moves}</span> moves!`;

        // display the modal
        modal.removeAttribute('style');
        modal.classList.add('show-modal');
        modalContent.classList.add('show-modal-content');
        body.classList.add('stop-scroll');
      }
    }
  });

  // declaring card collection and making a regular array out of it
  const cardCollection = document.getElementsByClassName('card');
  let cards = Array.from(cardCollection);

  // function to reset the card state and block pointer events if two cards were flipped
  function resetBoard() {
    // filter out cards that were matched
    const filtered = cards.filter(x => !matched.includes(x));
    cards = filtered;

    cards.forEach(card => {
      // get card-inner div to apply flipping effect
      const inner = Array.from(card.children)[0];

      // player can not flip a card if two cards are flipped
      card.style.pointerEvents = 'none';

      // player will see flipped card for a period of 1s, then it will flip back
      setTimeout(() => {
        // remove style and flip card back
        card.removeAttribute('style');
        inner.classList.remove('active-card');
      }, 1000);
    });
  }
}

// function to start the game
start.addEventListener('click', () => {
  // hides the menu
  menu.style.display = 'none';

  // start game
  init();
});

// retry button function
retry.addEventListener('click', () => {
  // hide modal
  modalContent.classList.remove('show-modal-content');
  modal.style.opacity = 0;
  setTimeout(function() {
    modal.classList.remove('show-modal');
    body.classList.remove('stop-scroll');

    // reset game
    resetGame();

    // initialize game
    init();
  }, 400);
});


// reset board variables
function resetGame() {
  gameContainer.innerHTML = '';
  matched = [];
  moves = 0;
}
