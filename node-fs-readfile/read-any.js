import { readFile } from 'node:fs/promises';

const arg1 = process.argv[2];

async function readAny(fileName) {
  try {
    const file = await readFile(fileName, 'utf-8');
    console.log(file);
  } catch (err) {
    console.error(err);
  }
}

readAny(arg1);
