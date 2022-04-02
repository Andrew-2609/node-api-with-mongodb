import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://<host>:<password>@cluster0.auc6g.mongodb.net/<database>');

let db = mongoose.connection;

export default db;