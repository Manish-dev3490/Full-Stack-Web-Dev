// Introduction to javascipt --> So javascript is a programming language initially it was only browser language which means you are not able to run javascript outside the browser because it needs engine to excecute and run but now we have indepandant javascript engines like node ,v8,dino,chakra,spider monkey etc etc.so because of these engines we can run javascript anywhere we want.so let us begin with the javascript.....



// so for storing the data in javascript there are two type of datatypes Primitive and non Primitive . Primitive data types are number,string,bool,symbol,undefined,null,bigint.let us begin with the primitive data types.and storing the data we need variables and we can declare variables using three ways let,var,const...so if we want to store information of something we can store in variables using let,const var...



// Using var->var is old way to declare variables 
var name="manish";
var age=21;
var address="359 chirag delhi ";


// var = The memory for var is allocated in the global object window also known as browser object model. we can also redeclare the same name variable using var but this is not good practice and when we declare variable with var it is hoisted in the global object window and initialized with undefined .so you can acess it before its initialization .var is function scoped 

// function scoped var ->it means we can access var in any part of our function beacuse it is functional scoped 
function printmyname(){
    if(true){
        var a="manish kumar";
    }
    console.log(a);
}
// printmyname();



// using let is newer way to declare variables 
let course="B-technology";

// So let is es6 way of declaring variables so let is diffrent than var because it is also hoisted but not initialized with undefined and it is allocated in the script memory diffrent than global object window.so you cannot access it before its declration you will get error ans let is not functional scoped it is block scoped...


// this code will give error because let is not functional scoped when function is created it creates its own excecution context where all the memory allocation done in local scope but for let are allocated in block scope 
function exampleBlockScope(){
    if(true){
        let a=10;
        var b=30;
    }
    console.log(b);
    
}
exampleBlockScope();



//  const is alsos same 