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

async function create(str) {
  const key = parsedData.nextId;
  notes[key] = str;
  parsedData.nextId++;
  const jsonString = JSON.stringify(parsedData, null, 2);
  await writeFile('data.json', jsonString);
}

async function update() {
  notes[arg2] = arg3;
  const jsonString = JSON.stringify(parsedData, null, 2);
  await writeFile('data.json', jsonString);
}

async function del(str) {
  delete notes[arg2];
  const jsonString = JSON.stringify(parsedData, null, 2);
  await writeFile('data.json', jsonString);
}

function read() {
  for (const key in notes) {
    const theKey = Number(key);
    const theValue = notes[key];
    console.log(`${theKey}: ${theValue}`);
  }
}
switch (arg) {
  case 'read':
    read();
    break;
  case 'create':
    create(arg2);
    break;
  case 'delete':
    del();
    break;
  case 'update':
    update();
    break;
}
