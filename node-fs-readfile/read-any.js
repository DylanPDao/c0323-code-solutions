import { open } from 'node:fs/promises';

const arg1 = process.argv[2];

async function readAny(fileName) {
  try {
    const file = await open(fileName);
    for await (const line of file.readLines()) {
      console.log(line);
    }
  } catch (error) {
    console.log(error);
  }
}

readAny(arg1);
