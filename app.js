const express = require('express');
const app = express();
const ejs = require('ejs');
const router = require('./wear_comRouter');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', router);

app.listen(80, 'wearit.club');
console.log('now listening on port 80');
