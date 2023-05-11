import { writeFile } from 'node:fs/promises';

const cmdArg = process.argv[2] + '\n';

async function write() {
  try {
    await writeFile('note.txt', cmdArg);
  } catch (err) {
    console.error(err);
  }
}

write();
