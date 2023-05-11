import { writeFile } from 'node:fs/promises';

const randomNumber = Math.floor(Math.random() * 100) + '\n';

async function write() {
  try {
    await writeFile('random.txt', randomNumber);
  } catch (err) {
    console.error(err);
  }
}

write();
