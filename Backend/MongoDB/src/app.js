const express = require('express');
const app = express();
const connectDB = require('./Config/database');
const User = require('./Models/user')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const auth=require('./Middlewares/auth')
const {validateSignUpAPI,validateLoginAPI}=require('./utils/validation')
const cookieParser = require("cookie-parser");


app.use(cookieParser());
app.use(express.json());

// login api to login user
app.post("/login", async (req, res) => {
    try {
        validateLoginAPI(req);

        const { email, password } = req.body;
        

        // check user exist
        const user = await User.findOne({email});
        if (!user) {
            throw new Error("Invalid credentials");
        }

        // compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error("Invalid credentials");
        }

        const token=jwt.sign({_id:user._id,email:user.email},"$foobar$");
        res.cookie("token",token);
        res.send("Login Successfully");

    } catch (error) {
        res.status(401).send(error.message);
    }
});

// signup request ko handle krega 
app.post("/user", async (req, res) => {

    try {
        validateSignUpAPI(req)
        const {password}=req.body
        const hashedPassword=await bcrypt.hash(password,10);
        req.body.password=hashedPassword;
        await User.create(req.body);
        res.send("new user is inserted");
    }
    catch (error) {
        res.status(401).send("something went wrong" + error.message);
    }
})

// get api to fetch all user from database
app.get("/user",auth, async (req, res) => {
    try {
        const allUsers = await User.find({});
        res.send(allUsers);
    }

    catch (error) {
        res.status(401).send("something went wrong" + error.message);
    }
})


connectDB().
    then(() => {
        console.log("we are successfully connected with the cluster");
        app.listen(3000, () => console.log("app is listnerning on the port 4000"));
    }).catch((error) => console.log("we are not connected with cluster" + error));



