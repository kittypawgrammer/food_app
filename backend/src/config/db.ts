import { Pool } from 'pg';
import { env } from './env';

export const pool = new Pool({
  connectionString: env.databaseUrl,
  connectionTimeoutMillis: 3000,
  idleTimeoutMillis: 10000,
});

let isDbConnected = false;

export const getDbStatus = () => isDbConnected;

// Initialize database schema and verify connectivity
export const initDb = async (): Promise<boolean> => {
  try {
    const client = await pool.connect();
    try {
      // Auto-create table if not exists
      await client.query(`
        CREATE TABLE IF NOT EXISTS restaurants (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          cuisine VARCHAR(100) NOT NULL,
          rating NUMERIC(2, 1) CHECK (rating >= 0 AND rating <= 5),
          address TEXT,
          image_url TEXT,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
      `);

      // Seed if empty
      const countRes = await client.query('SELECT COUNT(*) FROM restaurants');
      if (parseInt(countRes.rows[0].count, 10) === 0) {
        await client.query(`
          INSERT INTO restaurants (name, cuisine, rating, address, image_url) VALUES
          ('Pasta & Co', 'Italian', 4.6, '123 Via Roma, Downtown', 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500'),
          ('Burger Haven', 'American', 4.3, '456 Main St, Uptown', 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'),
          ('Curry Delight', 'Indian', 4.7, '789 Spice Ave, Midtown', 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500');
        `);
      }

      isDbConnected = true;
      console.log('🐘 PostgreSQL connected and schema verified');
      return true;
    } finally {
      client.release();
    }
  } catch (err: any) {
    isDbConnected = false;
    console.warn(
      `⚠️ PostgreSQL connection failed (${err.message || 'Check if Docker container is running'}). Using in-memory fallback.`
    );
    return false;
  }
};
