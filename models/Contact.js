//we will be creating the Contact schema here with mongoose
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
  
});


const Contact = mongoose.model('Contact', UserSchema);

//we are exporting contact data directly so we can use in our table
module.exports = {

    fetchData:function(callback){
        const contactsData = Contact.find({});
        contactsData.exec(function(err,data){
            if(err) throw err;
            return callback(data);
        })
    }, 
    Contact
}