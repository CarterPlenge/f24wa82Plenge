var express = require('express');
var router = express.Router();

/* GET Computation page. */
router.get('/', function(req, res, next) {
  let x = req.query.x ? parseFloat(req.query.x) : Math.random();
  let y = Math.fround(x);
  res.send(`Math.fround applied to ${x} is ${y}`);
});

module.exports = router;
