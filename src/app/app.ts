import express from 'express';
import type {Application, Request, Response, NextFunction} from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import api from './api/api.ts';

//import index from './router/index.ts';
/* INIT */ 
const app:Application = express();
/* Middleware */
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("common"));
app.use(helmet());
/* Routers */
app.use(api, '/api/');
//app.use(index, '/');

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send("Typescript Server Index")
})

export default app;

