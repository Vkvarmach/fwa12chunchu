var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Vijay Kumar Chunchu ' });
  res.render('mydata', { Text: 'I love dance' });
});

module.exports = router;
