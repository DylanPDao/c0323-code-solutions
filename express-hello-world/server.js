import express from 'express';

const app = express();

app.use((req, res) => {
  console.log(req.method);
  const response = res.send();
  console.log(response);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
