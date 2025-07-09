// So before learning about higher order function let us understand first class function - first class function is  a concept in which we store function in a variable like this ...

// Storing function in a variable 
const print=function abc (){
    console.log("Hello to the named function expression ");
    
}

// returning a function from inside a function 
function xyz(){
    let a=10;
    console.log(a);
    return function abc(){
        console.log(a);
    }
    
}
let rf=xyz();
rf();


// function passed as an arguments - So in javascript we can passed function as the arguments ....
function passed(){
    console.log("I am passed as the arguments");  
}


function HOF(x){
x();
}

HOF(passed);


// So Higher order function is if a function is taking another function as an arguments and a function is returning another function from it known as higher order function