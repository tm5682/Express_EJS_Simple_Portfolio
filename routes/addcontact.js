var express = require('express');
var router = express.Router();

//we bring the User model from models
const Contact = require('../models/Contact').Contact



/* GET add contact page. */
router.get('/', function(req, res, next) {
  res.render('addcontact', {page:'AddContact', menuId:'addcontact'});
});

//Add new contact
router.post('/add', (req, res) => {
    //destructuring  from form body
    const { name, email, number} = req.body;

     //We initialize newContact as Contact from our model
     const newContact = new Contact ({
        name, 
        email,
        number
      });

   
            //save Contact which gives us a promise, so we handle error with console err
            newContact.save()
            .then(contact => {
              //if successfully we redirect to businesspage as new contact addition is completed
              console.log(newContact);
              res.redirect('/businesspage');
            })
            .catch(err => console.log(err))


})

module.exports = router;