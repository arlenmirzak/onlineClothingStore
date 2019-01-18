const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    console.log('get request to homepage');
    res.render('index.ejs');
});

router.get('/account/login', function(req, res) {
    console.log('get request to login page');
    res.render('login.ejs');
});

router.get('/cart', function(req, res) {
    console.log('get request to shopping cart');
    res.render('cart.ejs');
});

router.get('/about', function(req, res) {
    console.log('get request to the about page');
    res.render('about.ejs');
});

router.get('/contact', function(req, res) {
    console.log('get request to the contact page');
    res.render('contact.ejs');
});

module.exports = router;