const express = require('express');
const cors = require('cors');
const { clientUrl } = require('./config/env');
const routes = require('./routes');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors({ origin: clientUrl })); // allow the Angular app to call us
app.use(express.json());              // parse JSON request bodies

app.use('/api', routes);

app.use(notFound);     // 404 for unknown routes
app.use(errorHandler); // central error handler (must be last)

module.exports = app;
