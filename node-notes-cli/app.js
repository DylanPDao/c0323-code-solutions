import { readFile, writeFile } from 'node:fs/promises';

let parsedData;
let notes;
let arg;
let arg2;
let arg3;

try {
  arg = process.argv[2];
  arg2 = process.argv[3];
  arg3 = process.argv[4];
  const data = await readFile('data.json', 'utf8');
  parsedData = JSON.parse(data);
  notes = parsedData.notes;
} catch (err) {
  console.error('Thrown Error: ', err);
}

async function storeIt() {
  const jsonString = JSON.stringify(parsedData, null, 2);
  try {
    await writeFile('data.json', jsonString);
  } catch (err) {
    console.error(err);
  }
}

async function create() {
  const key = parsedData.nextId;
  notes[key] = arg2;
  parsedData.nextId++;
  storeIt();
}

async function update() {
  if (notes[arg2] !== undefined) {
    notes[arg2] = arg3;
  } else {
    console.log('That note does not exist! Try again.');
  }
  storeIt();
}

async function del(str) {
  if (notes[arg2] !== undefined) {
    delete notes[arg2];
  } else {
    console.log('That note does not exist! Try again.');
  }
  storeIt();
}

function read() {
  for (const key in notes) {
    const theKey = key;
    const theValue = notes[key];
    console.log(`${theKey}: ${theValue}`);
  }
}

switch (arg) {
  case 'read':
    read();
    break;
  case 'create':
    create();
    break;
  case 'delete':
    del();
    break;
  case 'update':
    update();
    break;
}
