// In this file i am going to revise function,return,excecution context,call stack,scopes,block,local,global,histing....



// Let us starts with functions - so basically function is a block of code which is used again and again whenever you need that peice of code in your program.Like you want to find prime number in your prgram many tie just make a function f prime number and use that code as much time you want...


function print(){
var a=10;
let b=10;
console.log(b);

function second(){
    let name="manish";
    console.log(name);
    console.log(b);
    
    
}

second();

}

print();


// I have understood function,return,excecution context,global,local,block ,lexiacl scope , scope chain,hoisting,temporal deadz zone ,