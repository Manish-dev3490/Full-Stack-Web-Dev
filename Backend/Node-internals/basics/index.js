const { log } = require("console");
const fs=require("fs");

function addition(a,b){console.log(a+b);}
addition(2,2);

setTimeout(() => {
    console.log("i am the timeout api");
}, 2000);


fs.readFile('C:\Users\manish kumar\OneDrive\Desktop\Full Stack Web Dev\Backend\Node-internals\basics\readme.md',"utf-8",(res)=>{
    console.log(res);
})

