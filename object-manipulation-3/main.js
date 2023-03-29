// console.log('Lodash is loaded:', typeof _ !== 'undefined');
// function runGame() {
// getDeck();
// shuffle();
// deal();
// getValue();
// changeFace()
// }

// const deck = [];
// const playerCards = []
// const players = [
//   { Name: 'Shawn', hand: [] },
//   { Name: 'Brian', hand: [] },
//   { Name: 'Sarah', hand: [] },
//   { Name: 'Dylan', hand: [] }
// ];
// // creating the deck
// function getDeck() {
//   const suits = ['spades', 'diamonds', 'clubs', 'hearts'];
//   const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

//   for (let i = 0; i < suits.length; i++) {
//     for (let j = 0; j < values.length; j++) {
//       const card = { value: values[j], suit: suits[i] };
//       deck.push(card);
//     }
//   }
//   return deck;
// }
// // shuffling the deck
// function shuffle() {
//   for (let i = deck.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * deck.length);
//     const temp = deck[j];
//     deck[i] = deck[j];
//     deck[j] = temp;
//   }
//   return deck;
// }
// // dealing out 2 cards per player
// function deal() {
//   for (let i = 0; i < 8; i++) {
//     if (i < 4) {
//       players[i].hand.push(deck[i]);
//     } else {
//       players[i - 4].hand.push(deck[i]);
//     }
//   }
//   return players
// }
// // getting the value of the player cards
// function getValue() {
//   for (let i = 0; i < players.length; i++) {
//     playerCards.push(players[i].hand[0].value)
//   }
//   for (let i = 0; i < players.length; i++) {
//     playerCards.push(players[i].hand[1].value)
//   }
//   return playerCards
// }
// //turn faces and ace into 10/11
// function changeFace() {
//   const faces = ['J', 'Q', 'K']
//   const ace = ['A']
//   for (let i = 0; i < playerCards.length; i++) {
//     for (let j = 0; j < faces.length; j++) {
//       if(playerCards[i] === faces[j]) {
//         playerCards[i] = '10'
//       }
//     }
//   }
//   for (let i = 0; i < playerCards.length; i++) {
//     for (let j = 0; j < ace.length; j++) {
//       if (playerCards[i] === ace[j]) {
//         playerCards[i] = '11'
//       }
//     }
//   }
//   return playerCards
// }
// //compare values
// function winner() {
//   const newArr = [];
//   for (let i = 0; i < 4; i++) {

//   }
// }
