const book1 = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryID: 3353,
};

const { title: title1 } = book1;
const { author: author1 } = book1;
const { libraryID: id1 } = book1;

const string1 = `The title of the book is ${title1}, the author is ${author1}, and
the library id is ${id1}`;

console.log(string1);

const book2 = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryID: 2345,
};

const { title: title2 } = book2;
const { author: author2 } = book2;
const { libraryID: id2 } = book2;

const string2 = `The title of the book is ${title2}, the author is ${author2}, and
the library id is ${id2}`;

console.log(string2);

const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245,
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryID: 1233,
  },
];

const [book3, book4, book5] = library;
console.log('book3:', book3);
console.log('book4:', book4);
console.log('book5:', book5);

const [, , , book6] = library;
console.log('book6:', book6);
