let n="Manish";

// Produced a new promise and handling promise in oler fashion
const prom=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Your promise has been resolved");
    },5000)
})



function handlePromise(){
    prom.then(function(retrunval){
        console.log(retrunval);
        
    }).catch(function(error){
        console.log(error);
        
    })

    console.log('Namastey javascript developers ko ');
    
}

handlePromise();




// Producing a promise and handling it with new pattern using async await

const promi=new Promise(function(res,rej){
    setTimeout(() => {
        res("Your promise is reolved");
    }, 9000);
})

const promi2=new Promise(function(res,rej){
    setTimeout(() => {
        res("Your promise is reolved");
    }, 5000);
})
 

 async function handlePromi(){
    console.log('helllo before ');
    
    const data=await promi;
    console.log('Namastey js devs');
    console.log(data);

    const data2=await promi2;
    console.log('Namastey js devs 2');
    console.log(data2);
}

handlePromi();