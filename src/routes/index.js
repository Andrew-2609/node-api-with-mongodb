import express from 'express';
import bookRoutes from './bookRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.send(200).send({ title: 'NodeJS course' });
    });

    app.use(
        express.json(),
        bookRoutes
    );
};