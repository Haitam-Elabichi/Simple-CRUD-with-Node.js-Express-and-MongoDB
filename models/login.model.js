const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            
        },
        password: {
            type: String,
           
        }
    },

);

const collectionUsers = mongoose.model("users", LoginSchema);
console.log('login add succes')

module.exports = {collectionUsers};
