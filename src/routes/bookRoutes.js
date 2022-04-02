import express from 'express';
import BookController from '../controllers/bookController.js';

const router = express.Router();

router.get('/', BookController.listBooks);

export default router;