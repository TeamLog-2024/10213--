import express from 'express';
import memoRouter from './routes/notes.js';

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));

app.use('/notes', memoRouter);

app.get('/', (req, res) => {
    res.redirect('/notes');
});

app.listen(PORT);



