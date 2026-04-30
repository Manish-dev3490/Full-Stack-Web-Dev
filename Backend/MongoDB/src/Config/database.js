const mongoose = require('mongoose');

const url = "mongodb+srv://kmanish87064_db_user:CodingAdda123@coding-adda.neh8o7x.mongodb.net/practice-db";

 async function connectDB() {
    await mongoose.connect(url);
}

module.exports = connectDB;
