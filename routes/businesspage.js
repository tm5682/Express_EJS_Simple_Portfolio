var express = require('express');
var router = express.Router();

//we bring the controller for contactstabledata
var fetchContactsData = require('../controllers/fetchContactsData');

//we destructure and bring ensureAuthenticated from auth file to protect our businesspage link
const { ensureAuthenticated } = require('../config/auth')

/* Business page with auth rule passed */
router.get('/', ensureAuthenticated, fetchContactsData.fetchData, function(req, res, next) {
  res.render('businesspage', {page:'Businesspage', menuId:'businesspage'});
});



module.exports = router;
