var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('about', {page:'About', menuId:'about'});
});

module.exports = router;
