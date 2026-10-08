import dotenv from 'dotenv';

dotenv.config({ quiet: true });

// One place to read environment variables.
export const env = {
  port: Number(process.env.PORT) || 5000,
  clientUrl: process.env.CLIENT_URL || 'http://localhost:3000'
};
