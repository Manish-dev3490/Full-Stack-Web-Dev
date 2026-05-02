const express = require('express');
const app = express();
const connectDB = require('./Config/database');
const User = require('./Models/user')
const bcrypt=require('bcrypt')
const {validateSignUpAPI,validateLoginAPI}=require('./utils/validation')


app.use(express.json());

// login api to login user
app.post("/login", async (req, res) => {
    try {
        validateLoginAPI(req);

        const { email, password } = req.body;

        // check user exist
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("Invalid credentials");
        }

        // compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error("Invalid credentials");
        }

        res.send("Login Successfully");

    } catch (error) {
        res.status(401).send(error.message);
    }
});

// signup request ko handle krega 
app.post("/user", async (req, res) => {

    try {
        validateSignUpAPI(req)
        await User.create(req.body);
        res.send("new user is inserted");
    }
    catch (error) {
        res.status(401).send("something went wrong" + error.message);
    }
})

// get api to fetch all user from database
app.get("/user", async (req, res) => {
    try {
        const allUsers = await User.find({});
        res.send(allUsers);
    }

    catch (error) {
        res.status(401).send("something went wrong" + error.message);
    }
})


// api to delete a user from database
app.delete("/user", async (req, res) => {
  
  try {
    await User.findByIdAndDelete({_id:req.body._id});
    res.send("user is deleted");
  }
  catch (error) {
    res.status(401).send("something went wrong " + error);
  }
})


// api to update a particular user by  his details
app.patch("/user",async(req,res)=>{
    console.log(req.body.id);
    
  try{
     await User.findByIdAndUpdate({_id:req.body._id},{firstName:req.body.firstName,email:req.body.email},{runValidators:true});
     res.send("user is updated");
  }
  catch(error){
    res.status(401).send("something went wrong"+error);
  }
})


connectDB().
    then(() => {
        console.log("we are successfully connected with the cluster");
        app.listen(4000, () => console.log("app is listnerning on the port 4000"));
    }).catch((error) => console.log("we are not connected with cluster" + error));



