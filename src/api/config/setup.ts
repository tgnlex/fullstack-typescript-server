
import express from 'express';
import type {Application} from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

//import index from './router/index.ts';
/* INIT */ 
const app: Application = express();
/* Middleware */
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("common"));
app.use(helmet());

export default app;
