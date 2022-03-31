import express from 'express';

const app = express();

const books = [
    { id: 1, title: 'Lord of the Rings' },
    { id: 2, title: 'Harry Potter' }
];

app.get('/', (req, res) => {
    res.status(200).send('NodeJS course');
});

app.get('/books', (req, res) => {
    res.status(200).json(books);
});

export default app;