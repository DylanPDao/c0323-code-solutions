import { readFile } from 'node:fs/promises';

const [, , ...argList] = process.argv;

async function readAny(fileName) {
  try {
    const file = await readFile(fileName, 'utf-8');
    await console.log(file);
  } catch (error) {
    console.log(error);
  }
}

for (let i = 0; i < argList.length; i++) {
  readAny(argList[i]);
}
