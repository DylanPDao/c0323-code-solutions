import { open } from 'node:fs/promises';

async function readIt() {
  try {
    const file = await open('./dijkstra.txt');
    for await (const line of file.readLines()) {
      console.log(line);
    }
  } catch (error) {
    console.log(error);
  }
}

await readIt();
