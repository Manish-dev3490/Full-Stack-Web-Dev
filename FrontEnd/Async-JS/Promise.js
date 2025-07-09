// Now i am going to learn about the promisses . What is promise why do we even need it what whas there when promise was not so i will explian everythin g related to this in current file.


// So before promises assume we have to make a ecommerce functionalities to make a cart then make payment then order summary and after thankyou for shopping this ttype of message 

function Makecart(callback1){
    console.log("Your cart is created ");
    callback1();
}

function paymentorder(callback2){
    console.log('Your payment is done');
    callback2();
}

function showOrderSummary(callback3){
    console.log('You have purchased kurta jeans and shirt');
    callback3();
}

function regardingUser(){
    console.log('Thank you for the shopping ');
}

// Makecart(()=>{
//     paymentorder(()=>{
//         showOrderSummary(()=>{
//             regardingUser();
//         })
//     })
// })


// So this kind of stuff we have to do before promises callback inside callback which creates a callback hell and we pass callback into apis and we lost control over our callback now this is api's esponsibility to call that callback correctly now it is possible that api will call that twice or does not call this situation is known as inversion of control.to prevent this kind of situation promsises are invented ....


// Now i will tell you this is the need of promises . so promise is an empty object which represent the completion or failure of the asyncronus javascript operation .It has 3 state pending,fulfilled,rejected .

