import { join } from 'node:path';
import express from 'express';
import router from './routes/index.js';

const app = express();
app.set('views', join(import.meta.dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', router);

app.listen(3000, (error) => {
  if (error) {
    throw error;
  }
  console.log('App listening on port 3000!');
});
