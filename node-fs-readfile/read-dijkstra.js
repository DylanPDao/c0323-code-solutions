import { readFile } from 'node:fs/promises';

async function readIt() {
  try {
    const file = await readFile('./dijkstra.txt/', 'utf-8');
    await console.log(file);
  } catch (error) {
    console.log(error);
  }
}

await readIt();
