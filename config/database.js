import { Pool } from 'pg';

export default new Pool({
  host: process.env.POOL_HOST,
  user: process.env.POOL_USER,
  database: process.env.POOL_DB,
  password: process.env.POOL_PASS,
  port: process.env.POOL_PORT,
});
