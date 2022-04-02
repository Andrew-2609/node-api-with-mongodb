import express from 'express';
import db from './config/dbConnect.js';
import books from './models/Book.js';
import routes from './routes/index.js';

db.on('error', console.log.bind(console, 'Connection Error =('));
db.once('open', () => {
    console.log('Successfully connected to the database!');
});

const app = express().use(express.json());

routes(app);

app.get('/books/:id', (req, res) => {
    const bookId = findBook(req.params.id);
    res.status(200).json(books[bookId]);
});

app.post('/books', (req, res) => {
    books.push(req.body);
    res.status(201).send('Book successfully inserted!');
});

app.put('/books/:id', (req, res) => {
    const bookId = findBook(req.params.id);
    books[bookId].title = req.body.title;
    res.status(200).json(books);
});

app.delete('/books/:id', (req, res) => {
    const bookId = findBook(req.params.id);
    books.splice(bookId, 1);
    res.status(200).send(`Book of id ${bookId + 1} successfully removed!`);
});

function findBook(id) {
    return books.findIndex(book => book.id === Number(id));
}

export default app;