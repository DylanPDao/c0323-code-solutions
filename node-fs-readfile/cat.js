import { readFile } from 'node:fs/promises';

const [, , ...argList] = process.argv;
const argPromise = argList.map((e) => readAny(e));

async function readAny(fileName) {
  try {
    return await readFile(fileName, 'utf-8');
  } catch (err) {
    console.error(err);
  }
}

try {
  const prom = await Promise.all(argPromise);
  for (let i = 0; i < argPromise.length; i++) {
    console.log(prom[i]);
  }
} catch (error) {
  console.log(error);
}
