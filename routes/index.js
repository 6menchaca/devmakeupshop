const express = require('express');
const router = express.Router();
const {  RECAPTCHA_SITE_KEY} = require('../public/js/script.js');
//var User = require('../models/user')


router.get('/', function(req, res, next) {
  console.log('hi');
  res.render('index');
  next();
});



router.get('/shop', function(req, res, next) {
  res.render('shop');
  next();
});

router.get('/about', function(req, res, next) {
  res.render('about');
  next();
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
  next();
});


router.get('/register', function(req, res, next) {
  res.render('register');
  next();
});



router.get('/cart', function(req, res, next) {
  res.render('cart');
  next();
});

router.get('/*', function(req, res) {
   res.render('error');
});



module.exports = router;
