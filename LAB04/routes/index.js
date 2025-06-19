var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pet Site' });
});

/* Individual pet pages */
router.get('/dog', (req, res) => {
  res.render('dog');
});

router.get('/cat', (req, res) => {
  res.render('cat');
});

router.get('/parrot', (req, res) => {
  res.render('parrot');
});

router.get('/rabbit', (req, res) => {
  res.render('rabbit');
});

router.get('/about', (req, res) => {
  res.render('about');
});


module.exports = router;
