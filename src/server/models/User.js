const mongoose = require('../mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    }
});

//Hash password before saving to mongo
UserSchema.pre('save', function (next) {
    const user = this;
    bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    });
});

//Verify password against one stored in DB
UserSchema.statics.authenticate = function (email, password, callback) {
    User.findOne({ email: email })
        .exec(function (err, user) {
            if (err) {
                callback(err);
                return;
            } else if (!user) {
                const err = new Error('User not found.');
                err.status = 404;
                callback(err);
                return;
            }

            bcrypt.compare(password, user.password, function (err, result) {
                if(err) {
                    callback(err, null);
                } else if(result) {
                    callback(null, user);
                } else {
                    const err = new Error('Unknown error verifying password.');
                    err.status = 401;
                    callback(err);
                }
            })
        });
};

const User = mongoose.model('User', UserSchema);

module.exports = User;