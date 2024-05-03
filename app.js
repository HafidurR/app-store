import express from 'express';

const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  res.send('Welcome to the World!');
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})