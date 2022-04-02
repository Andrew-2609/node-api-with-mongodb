import express from 'express';
import BookController from '../controllers/bookController.js';

const router = express.Router();

router
    .get('/books', BookController.list)
    .get('/books/search', BookController.listByPublisher)
    .get('/books/:id', BookController.findById)
    .post('/books', BookController.register)
    .put('/books/:id', BookController.update)
    .delete('/books/:id', BookController.delete);

export default router;