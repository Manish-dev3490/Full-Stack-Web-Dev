//  Now in this file i am going to learn about how map filter and reduce works bheind the scene so as you know any function which return function from its inside or any function which take another function as an arguments is called an higher order function and map filter and reduces are the example of higherr order function...



// it will doubles the value of elements in an array
const arr=[2,4,6,8,10];
const output=arr.map(function(x){
return x*2;
})

console.log(output);
