var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('businesspage', {page:'Businesspage', menuId:'businesspage'});
});


module.exports = router;
