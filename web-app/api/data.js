import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

export default async function handler(req, res) {
  const client = await pool.connect();
  const result = await client.query('SELECT * FROM your_table');
  client.release();
  res.status(200).json(result.rows);
}