import express from 'express';
import BookController from '../controllers/bookController.js';

const router = express.Router();

router
    .get('/books', BookController.listBooks)
    .get('/books/:id', BookController.findBookById)
    .post('/books', BookController.registerBook)
    .put('/books/:id', BookController.updateBook);

export default router;