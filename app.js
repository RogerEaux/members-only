import { join } from 'node:path';
import express from 'express';
import router from './routes/index.js';
import passport from 'passport';
import session from 'express-session';
import pool from './config/database.js';
import connectPgSimple from 'connect-pg-simple';
import './config/paspport.js';

const app = express();
app.set('views', join(import.meta.dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(join(import.meta.dirname, 'public')));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PGStore = connectPgSimple(session);

const sessionStore = new PGStore({
  pool: pool,
});

app.use(
  session({
    store: sessionStore,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }, // 1 day
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', router);

app.listen(3000, (error) => {
  if (error) {
    throw error;
  }
  console.log('App listening on port 3000!');
});
