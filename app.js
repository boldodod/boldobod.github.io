const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(require('./controllers'));

// eslint-disable-next-line func-names
app.listen('3000', () => {

});
