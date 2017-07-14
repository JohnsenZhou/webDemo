var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { layout: 'layout' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { layout: 'layout' });
});

module.exports = router;
