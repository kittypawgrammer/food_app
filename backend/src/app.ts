import express from 'express';
import cors from 'cors';
import { env } from './config/env';
import routes from './routes';
import { notFound } from './middlewares/notFound';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(cors({ origin: env.clientUrl })); // allow the Angular app to call us
app.use(express.json());                  // parse JSON request bodies

app.use('/api', routes);

app.use(notFound);     // 404 for unknown routes
app.use(errorHandler); // central error handler (must be last)

export default app;
