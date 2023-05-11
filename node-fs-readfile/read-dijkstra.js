import { readFile } from 'node:fs/promises';

async function readIt() {
  try {
    const file = await readFile('./dijkstra.txt', 'utf-8');
    console.log(file);
  } catch (err) {
    console.error(err);
  }
}

await readIt();
