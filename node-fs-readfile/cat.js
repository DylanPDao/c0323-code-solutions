import { open } from 'node:fs/promises';

const argList = process.argv;

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

for (let i = 2; i < argList.length; i++) {
  readAny(argList[i]);
}
