import express from 'express';
import bodyParser from 'body-parser';
import Routes from './Server/routes/index';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1', Routes);

app.get('/', (req, res) => res.json('Start with /user'));

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
