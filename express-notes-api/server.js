import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';
const app = express();
app.use(express.json());

// errors array
const errorArr = {
  negative: { error: 'Id must be a positive integer.' },
  noId: (id) => ({ error: `Cannot find note with id ${id}.` }),
  empty: { error: 'Content cannot be empty.' },
  unknown: { error: 'An unexpected error occurred.' },
};

async function readData() {
  const dataJson = await readFile('data.json', 'utf8');
  return JSON.parse(dataJson);
}

// read all entries function and route
async function readAll() {
  const data = await readData();
  const notes = data.notes;
  const notesArr = [];
  for (const key in notes) {
    notesArr.push(notes[key]);
  }
  return notesArr;
}

app.get('/api/notes', async (req, res) => {
  const allNotes = await readAll();
  res.status(200).json(allNotes);
});

// read by ID function and route
async function readOne(id) {
  const data = await readData();
  return data.notes[id];
}

app.get('/api/notes/:id', async (req, res) => {
  const { id } = req.params;
  if (id < 0) {
    res.status(400).json(errorArr.negative);
  } else {
    const oneNote = await readOne(id);
    if (oneNote === undefined) {
      res.status(404).json(errorArr.noId(id));
    } else {
      res.status(200).json(oneNote);
    }
  }
});

// update data.json
async function saveNotes(data) {
  const jsonString = JSON.stringify(data, null, 2);
  await writeFile('data.json', jsonString);
}

// add new note
async function writeNewNote(contentObj) {
  const data = await readData();
  const notes = data.notes;
  contentObj.id = data.nextId;
  notes[data.nextId] = contentObj;
  data.nextId++;
  await saveNotes(data);
  return notes[data.nextId - 1];
}

app.post('/api/notes', async (req, res) => {
  const contentObj = req.body;
  if (!contentObj.content) {
    res.status(400).json(errorArr.empty);
  } else {
    try {
      const newNote = await writeNewNote(contentObj);
      res.status(201).json(newNote);
    } catch (err) {
      console.error(err);
      res.status(500).json(errorArr.unknown);
    }
  }
});

// delete note by id
async function deleteNote(id) {
  const data = await readData();
  delete data.notes[id];
  await saveNotes(data);
}

app.delete('/api/notes/:id', async (req, res) => {
  const { id } = req.params;
  if (id < 0) {
    res.status(400).json(errorArr[0]);
  } else {
    const oneNote = await readOne(id);
    if (oneNote === undefined) {
      res.status(404).json(errorArr.noId(id));
    } else {
      try {
        await deleteNote(id);
        res.sendStatus(204);
      } catch (err) {
        console.error(err);
        res.status(500).json(errorArr.unknown);
      }
    }
  }
});

// update note
async function updateNote(id, contentObj) {
  const data = await readData();
  data.notes[id].content = contentObj.content;
  await saveNotes(data);
}

app.put('/api/notes/:id', async (req, res) => {
  const { id } = req.params;
  const contentObj = req.body;
  if (id < 0) {
    res.status(400).json(errorArr[0]);
  } else if (!contentObj.content) {
    res.status(400).json(errorArr.empty);
  } else {
    const oneNote = await readOne(id);
    if (oneNote === undefined) {
      res.status(404).json(errorArr.noId(id));
    } else {
      try {
        await updateNote(id, contentObj);
        const data = await readData();
        res.status(200).json(data.notes[id]);
      } catch (err) {
        console.error(err);
        res.status(500).json(errorArr.unknown);
      }
    }
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
