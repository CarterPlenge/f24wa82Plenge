var express = require('express');
var router = express.Router();

/* Get mydata. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Carter Matthew Plenge' });
});

module.exports = router;
