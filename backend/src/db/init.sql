-- Create restaurants table
CREATE TABLE IF NOT EXISTS restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  cuisine VARCHAR(100) NOT NULL,
  rating NUMERIC(2, 1) CHECK (rating >= 0 AND rating <= 5),
  address TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Seed initial restaurants if table is empty
INSERT INTO restaurants (name, cuisine, rating, address, image_url)
SELECT 'Pasta & Co', 'Italian', 4.6, '123 Via Roma, Downtown', 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500'
WHERE NOT EXISTS (SELECT 1 FROM restaurants WHERE name = 'Pasta & Co');

INSERT INTO restaurants (name, cuisine, rating, address, image_url)
SELECT 'Burger Haven', 'American', 4.3, '456 Main St, Uptown', 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'
WHERE NOT EXISTS (SELECT 1 FROM restaurants WHERE name = 'Burger Haven');

INSERT INTO restaurants (name, cuisine, rating, address, image_url)
SELECT 'Curry Delight', 'Indian', 4.7, '789 Spice Ave, Midtown', 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500'
WHERE NOT EXISTS (SELECT 1 FROM restaurants WHERE name = 'Curry Delight');
