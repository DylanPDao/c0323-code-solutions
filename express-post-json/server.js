import express from 'express';
const app = express();
app.use(express.json());
const grades = {};
let nextId = 1;

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const key in grades) {
    gradesArr.push(grades[key]);
  }
  res.status(200).json(gradesArr);
});

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  nextId++;
  res.status(204).end();
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
