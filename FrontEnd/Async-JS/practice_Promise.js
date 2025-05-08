let n="Manish";

// Produced a new promise and handling promise in oler fashion
// const prom=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("Your promise has been resolved");
//     },5000)
// })



// function handlePromise(){
//     prom.then(function(retrunval){
//         console.log(retrunval);
        
//     }).catch(function(error){
//         console.log(error);
        
//     })

//     console.log('Namastey javascript developers ko ');
    
// }

// handlePromise();




// Producing a promise and handling it with new pattern using async await

const promi=new Promise(function(res,rej){
    setTimeout(() => {
        res("Your promise is reolved");
    }, 4000);
})


 async function handlePromi(){
    const data=await promi;
    console.log('Namastey js devs');
    console.log(data);
}

handlePromi();