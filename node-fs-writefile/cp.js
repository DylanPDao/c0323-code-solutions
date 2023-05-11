import { readFile, writeFile } from 'node:fs/promises';

const fileToCopy = process.argv[2];
const newFileName = process.argv[3];

async function copy() {
  try {
    const originalContents = await readFile(fileToCopy, 'utf8');
    await writeFile(newFileName, originalContents);
  } catch (err) {
    console.error(err);
  }
}

copy();
