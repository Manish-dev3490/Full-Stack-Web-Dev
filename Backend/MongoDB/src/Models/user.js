const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30,
        trim: true
    },
    lastName: {
        type: String,
        minLength: 3,
        maxLength: 30,
        trim: true
    },
    age: {
        type: Number,
        min: 18,
        max: 60
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"]
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 60,
        trim: true
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
module.exports = User;