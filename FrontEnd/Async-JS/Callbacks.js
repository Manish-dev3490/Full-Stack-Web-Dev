// In this file we are ging to learn about callback before learning the callback we have to what is callback and why do we need callback ? So answer to these question are javascript is a synchronous single threaded language which means js engine is capable to excecute one line of code at a time becuase it only have one call stack and once one line is excecuted then it move to the second line which stops us to implement asynchronous behaviour in js so callback solve that problem.callback is a normal function which is paseed into another function and call back into the call stack later .let us see with the help of the examples...


// Assume we have to console.log some peice of line after 5 seconds it is only possible due to the asycn and callback
setTimeout(() => {
    console.log("Hello after 5 secomnds");
    
}, 5000);


// Now assume we have to implement e commerce functionaliies make cart and then create payment order and then create order summary and move to the main home page 


function makecart(orderCreateingApi){
console.log("Your cart of the product is created succesfully");
orderCreateingApi();

}


function createpaymentOrder(orderSummaryApi){
console.log("Your payment order is created ");
orderSummaryApi();
}


function createOrderSummary(visitHomepageAPi){
    console.log('Thank you for the shopping you have done shopping of 1 lakh');
    visitHomepageAPi();
    
}


function MoveToHomepage(){
    console.log('Welcome what do you want to buy the sale is going on');
    
}

makecart(()=>{
    createpaymentOrder(()=>{
        createOrderSummary(()=>{
            MoveToHomepage();
        })
    })
})

