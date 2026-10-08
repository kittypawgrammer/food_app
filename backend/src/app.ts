import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { env } from './config/env';
import { swaggerSpec } from './config/swagger';
import routes from './routes';
import { notFound } from './middlewares/notFound';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(cors({ origin: env.clientUrl })); // allow client app to call us
app.use(express.json());                  // parse JSON request bodies

// Swagger API Documentation UI and raw JSON schema
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/api/docs.json', (_req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json(swaggerSpec);
});
app.get('/docs', (_req, res) => res.redirect('/api/docs'));

app.use('/api', routes);

app.use(notFound);     // 404 for unknown routes
app.use(errorHandler); // central error handler (must be last)

export default app;
