
import express from 'express';
import type {Application} from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

const app: Application = express();
app.set('view engine')
/* Middlewre */
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("common"));
app.use(helmet());

app.use(express.static('../static'))


export default app;
