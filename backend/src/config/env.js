require('dotenv').config();

// One place to read environment variables.
module.exports = {
  port: process.env.PORT || 3000,
  clientUrl: process.env.CLIENT_URL || 'http://localhost:4200'
};
