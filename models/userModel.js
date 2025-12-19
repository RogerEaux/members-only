import db from '../config/database.js';

export function createUser(user) {
  return db.query(
    'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
    [user.username, user.email, user.hash]
  );
}

export function findUserByUsername(username) {
  return db.query('SELECT * FROM users WHERE username = $1', [username]);
}

export function findUserByEmail(email) {
  return db.query('SELECT * FROM users WHERE email = $1', [email]);
}
