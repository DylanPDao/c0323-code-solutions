console.log('Lodash is loaded:', typeof _ !== 'undefined');
// function runGame(players) {
getDeck();
shuffle();
deal();
// }

const deck = [];
const players = [
  { Name: 'Shawn', hand: [] },
  { Name: 'Brian', hand: [] },
  { Name: 'Sarah', hand: [] },
  { Name: 'Dylan', hand: [] }
];

function getDeck() {
  const suits = ['spades', 'diamonds', 'clubs', 'hearts'];
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      const card = { Value: values[j], Suit: suits[i] };
      deck.push(card);
    }
  }
  return deck;
}

function shuffle() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * deck.length);
    const temp = deck[j];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
}

function deal() {
  for (let i = 0; i < 8; i++) {
    if (i < 4) {
      players[i].hand.push(deck[i]);
    } else {
      players[i - 4].hand.push(deck[i]);
    }
  }
}

// function getValue {

// }
