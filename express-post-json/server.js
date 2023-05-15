import express from 'express';
const app = express();
const grades = {};
let nextId = 1;

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const key in grades) {
    gradesArr.push(grades[key]);
  }
  res.status(200).json(gradesArr);
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  nextId++;
  res.status(204).end();
});
