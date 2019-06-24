var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var numberOfMoves = 0;
var matches = 0;


function shuffleCards() {
  
  for (var i = cards.length - 1; i > 0; i--) {
    
    var randomIndex = Math.floor(Math.random() * (i + 1));
   
    var tempCard = cards[i];
    cards[i] = cards[randomIndex];
    cards[randomIndex] = tempCard;
    }
}


function createBoard() {
  shuffleCards();

  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.setAttribute('class', cards[i]);
    document.getElementById('game-board').appendChild(cardElement);
    cardElement.addEventListener('click', flipOverCard);
  }
}

function flipOverCard() {
  if (cardsInPlay.length === 2) {
    turnFaceDown();
    cardsInPlay = [];
    }

  this.innerHTML = '<img src= https://res.cloudinary.com/hucvviwxz/image/upload/v1469628601/code_challenge/jsc/unit_5/' + this.getAttribute('class')     + '.png>';
    cardsInPlay.push(this);

  if (cardsInPlay.length === 2) {
    numberOfMoves++;
    document.getElementById('attempts').innerHTML = numberOfMoves;
    isMatch();
    }
}

function isMatch() {
  var success = document.getElementById('success');

  if (cardsInPlay[0].getAttribute('class') === cardsInPlay[1].getAttribute('class')) {
    success.innerHTML = 'You found a match!';
    cardsInPlay = [];
    matches++;

    if (matches === cards.length / 2) {
      handleEndOfGame();
    }
  } 
  
  else {
    success.innerHTML = 'Try again.';
  }
}

function turnFaceDown() {
  for (var i = 0; i < cardsInPlay.length; i++) {
    cardsInPlay[i].innerHTML = '';
    }
}

function handleEndOfGame() {
  document.getElementById('success').innerHTML = 'Congratulations! You matched all cards in ' + numberOfMoves + ' moves.';
}

function resetGame() {
  cardsInPlay = [];
  numberOfMoves = 0;
  matches = 0;

  document.getElementById('game-board').innerHTML = '';
  document.getElementById('attempts').innerHTML = numberOfMoves;
  document.getElementById('success').innerHTML = 'Click two cards to start.';

  turnFaceDown();
  createBoard();
}

document.getElementById('reset').addEventListener('click', resetGame);

createBoard();