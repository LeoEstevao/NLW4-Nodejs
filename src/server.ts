// This needs to come first
import 'reflect-metadata';
// import './database'; It would also work, because the file that we want to import is named as 'index'
import express from 'express';
import './database/index.ts';

import { router } from './routes';


const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
    console.log("Server ir running!")
});