const express = require('express');
const app = express();
const ejs = require('ejs');
const router = require('./wear_comRouter');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/wearit.club', router);

app.listen(8080);
console.log('now listening on port 8080');
