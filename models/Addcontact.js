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
    }
  
});

const Addcontact = mongoose.model('DContact', UserSchema);

module.exports = Addcontact;