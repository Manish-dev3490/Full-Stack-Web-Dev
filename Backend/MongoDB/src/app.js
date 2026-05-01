const express = require('express');
const app = express();
const connectDB = require('./Config/database');
const User = require('./Models/user')
app.use(express.json());

// signup request ko handle krega 
app.post("/user", async (req, res) => {
    console.log(req.body);

    try {
        await User.create(req.body);
        res.send("new user is inserted");
    }
    catch (error) {
        res.status(404).send("something went wrong" + error);
    }
})

// get api to fetch all user from database
app.get("/user", async (req, res) => {
    try {
        const allUsers = await User.find({});
        res.send(allUsers);
    }

    catch (error) {
        res.status(404).send("something went wrong" + error);
    }
})


// api to delete a user from database
app.delete("/user", async (req, res) => {
  
  try {
    await User.findByIdAndDelete({_id:req.body._id});
    res.send("user is deleted");
  }
  catch (error) {
    res.status(404).send("something went wrong " + error);
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
    res.status(404).send("something went wrong"+error);
  }
})


connectDB().
    then(() => {
        console.log("we are successfully connected with the cluster");
        app.listen(4000, () => console.log("app is listnerning on the port 4000"));
    }).catch((error) => console.log("we are not connected with cluster" + error));



