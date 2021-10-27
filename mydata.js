var express = require('Vijay Kumar Chunchu');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Vijay Kumar Chunchu ' });
});

module.exports = router;
