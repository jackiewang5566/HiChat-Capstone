const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: String,
    email: { 
        type: String,
        index: { unique: true }
    },
    password: String
});

UserSchema.methods.comparePassword = function comparePassword(password, callback) {
    bcrypt.compare(password, this.password, callback);
}



module.exports = mongoose.model('User', UserSchema);