// This is how we mutate the object which is wrong
function howweMutateObject() {
    // this is how we genrally mutate the object but in redux asa directly mutate nahi krte 
    let state = {
        count: 0
    }
    state.count = state.count + 1;
}


// This is the recommended way to mutate object in react redux
function howReduxwantsUsToMutateObject() {
    // This is how we mutate object in redux nayi state return krte hai with updated value
    function increment(state) {
        const newObj = { ...state, count: state.count + 1 }
        return newObj;
    }

    const obj = increment(state);
    console.log(obj);
}


// This is the mechanism of redux behind the scenes reducer stre state action and many more thing 
function reduxMechanism(){


// Assume kro yeh hamare react app ki puri saari states hai ek store me inko update krne ke liye ek helper function chahiye which is called reducer in redux. 
let reduxState={
    count:0,
    age:23,
    name:'manish'
}


// reducer- reducer is a helper function which is used to take 2 arguments state of the application and action jisse yeh pata chlega puri app ki state me kis state ko change krna hai aur kya change krna hai.

function reducer(reduxState,action){
if(action.type==='increase/count')return {...reduxState,count:reduxState.count+1};
else if(action.type==='decrease/count')return {...reduxState,count:reduxState.count-1};
else return reduxState; 
}



// Abh redux kisi event par jab aplication se msg aata hai ki state change krni hai call krti hai reducer ko state deti hai aur action paas krti hai reducer function obviosuly woh action redux ko developer se milte hai

reduxState=reducer(reduxState,{type:'increase/count',payload:undefined});
console.log(reduxState);
reduxState=reducer(reduxState,{type:'decrease/count',payload:undefined});
console.log(reduxState);

}


// reduxMechanism()

