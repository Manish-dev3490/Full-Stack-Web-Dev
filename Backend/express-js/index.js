const express=require('express');

const app=express();
app.listen(4000,()=>{
    console.log("i am listening the request");
})


app.use("/about",(req,res)=>{
    res.send("hello ai am about")

})

app.use("/contact/:id",(req,res)=>{
    console.log(req.params);
    
    res.send("hello ai am contact")

})


app.use("/",(req,res)=>{
    res.send("hello ai am expreess")
    
})