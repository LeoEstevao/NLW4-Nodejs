// This needs to come first
import 'reflect-metadata';
// import './database'; It would also work, because the file that we want to import is named as 'index'
import express from 'express';
import createConnection from './database';

import { router } from './routes';

createConnection();
const app = express();

app.use(express.json());
app.use(router);

export { app };