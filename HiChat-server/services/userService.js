const UserModel = require('../models/userModel');

const signupUser = (newUser) => {
    console.log(newUser);
    return new Promise((resolve, reject) => {
        UserModel.findOne({ email: newUser.email }, (err, data) => {
            if (data) {
                reject('Email already registered');
            } else {
                let mongoUser = new UserModel(newUser);
                mongoUser.save();
                resolve(mongoUser);
            }
        })
    })
}

module.exports = {
    signupUser
};