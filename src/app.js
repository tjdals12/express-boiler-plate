import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import { swaggerConfig, statsConfig } from './swagger';
import routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(...swaggerConfig);
app.use(statsConfig);
app.use(routes);
app.use(helmet());

export default app;
