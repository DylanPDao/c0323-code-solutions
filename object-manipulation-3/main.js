console.log('Lodash is loaded:', typeof _ !== 'undefined');
// function runGame() {
//   const players = {
//     Shawn: 2,
//     Brian: 2,
//     Sarah: 2,
//     Dylan: 2
//   };
//   getDeck();
//   shuffle();
// }
// const deck = [];

// function getDeck() {
//   const suits = ['spades', 'diamonds', 'clubs', 'hearts'];
//   const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

//   for (let i = 0; i < suits.length; i++) {
//     for (let j = 0; j < values.length; j++) {
//       const card = { Value: values[j], Suit: suits[i] };
//       deck.push(card);
//     }
//   }
//   return deck;
// }

// function shuffle() {
//   for (let i = 0; i < 1000; i++) {
//     const place1 = Math.floor(Math.random() * deck.length);
//     const place2 = Math.floor(Math.random() * deck.length);
//     const temp = deck[place1];
//     deck[place1] = deck[place2];
//     deck[place2] = temp;
//   }
//   return deck;
// }
