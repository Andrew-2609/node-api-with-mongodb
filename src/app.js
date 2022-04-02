import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';

db.on('error', console.log.bind(console, 'Connection Error =('));
db.once('open', () => {
    console.log('Successfully connected to the database!');
});

const app = express().use(express.json());

routes(app);

export default app;