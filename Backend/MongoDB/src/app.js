const express = require('express');
const app = express();
const connectDB = require('./Config/database');
const User=require('./Models/user')
app.use(express.json());

// signup request ko handle krega 
app.post("/user",async(req,res)=>{
    console.log(req.body);
    
    try{
        await User.create(req.body);
        res.send("new user is inserted");
    }
    catch(error){
        res.status(404).send("something went wrong"+error);
    }
})


connectDB().
    then(() => {
        console.log("we are successfully connected with the cluster");
        app.listen(4000, () => console.log("app is listnerning on the port 4000"));
    }).catch((error) => console.log("we are not connected with cluster" + error));



