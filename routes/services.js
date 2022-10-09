var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('services', {page:'Services', menuId:'services'});
});

module.exports = router;