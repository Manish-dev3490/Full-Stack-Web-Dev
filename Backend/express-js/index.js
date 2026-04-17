const express=require('express');

const app=express();


app.listen(4000,()=>{
    console.log("i am listening the request");
})


app.use(express.json());

app.get("/user",(req,res)=>{
    res.send("Ths is default");
})

app.post("/user",(req,res)=>{
    console.log(req.body);
    
    res.send("your data is saved");
})