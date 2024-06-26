import express from 'express';

const app = express();
const port = 3000;

app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: true }));

let users = [];

app.get('/', (req, res) => {
  res.render('index', { users });
});

app.post('/add', (req, res) => {
  const { name, age } = req.body;
  users.push({ name, age });
  res.redirect('/');
});

app.get('/result/:name', (req, res) => {
  const { name } = req.params;
  res.render('result', { name });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
