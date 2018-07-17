const mongoose = require('mongoose');

module.exports = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    confirmationCode: {
        type: String
    },
    status: {
        type: Boolean, 
        default: false
    },
    email: {
        type: String
    } 
}));

// userSchema.pre('save', function(next) {
//     if(isNew()) {
//         this.confirmationCode = ()
//     }
// })