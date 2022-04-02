import express from 'express';
import AuthorController from '../controllers/authorController.js';

const router = express.Router();

router
    .get('/authors', AuthorController.list)
    .get('/authors/:id', AuthorController.findById)
    .post('/authors', AuthorController.register)
    .put('/authors/:id', AuthorController.update)
    .delete('/authors/:id', AuthorController.delete);

export default router;