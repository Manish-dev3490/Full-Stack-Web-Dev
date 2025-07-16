// So in redux there is a global Store where we integrate our states so let us learn fundamentals step by step in the below code;


// Assume this is the redux store and now we have to update its state without mutating(directly accessing the key values) of the object 
let Store = {
    count: 0
}

// So we will do by first copy the object using spread operator then now we have currentObject and we update we want
function incrementCount(currentState) {
    // we dont have to do this
    // Store.count=Store.count+1;

    // Not mutating we are actually changing the object
    return { ...currentState, count: currentState.count + 1 };
}

// This incrementCount is returning us a new object with updated value and we are not even mutating our object
Store = incrementCount(Store);




// Now i am going to tell you how redux works behind the scenes assume kro yeh hamar belw store main redux store hai. SO redux kahta hai agar apko state update krni hai toh bina mutate kiye krni pdegi mutate ka matlab hai direct access krke nahi kar skte . toh without mutate toh ek hee tarika hai object ko copy kro aur usme change krke return krdo aur haan redux kahta hai apko state function ke through change krni pdegi jisko redux reducer bolta hai 
let reduxState = {
    count: 0,
    name: 'manish',
    age: 22
}

console.log(reduxState);

// Abh yeh function jisko redux updater || reducer kahta hai termonology hai ek naya object return krega with update value aur copyied value ke saath usko hum reduxState me assign krdenge.uska naya refrence milte hee component ko re render kr deta hai this is how react works behin the scenes.
function reducer(state, action) {
    if (action.type === 'count/increment') {
        return { ...state, count: state.count + 1 };
    }

    else if (action.type === 'count/decrement') {
        return { ...state, count: state.count - 1 };
    }


    else if (action.type === 'count/decrementBy') {
        return { ...state, count: state.count - action.payload };
    }


    else if (action.type === 'count/incrementBy') {
        return { ...state, count: state.count + action.payload };
    }

    else return state;
}



// Abh maanlo mujhe states me kuch update krna hai toh hum directly toh kar nahi sakte redux humko functionality deta hai reducers ki reducers are nothing but function which is used to update the state now we are going to write actions toh abh hamara reducer functions hai uske andar actions defined hai 

reduxState=reducer(reduxState,{type:'count/increment'});
console.log(reduxState);


reduxState=reducer(reduxState,{type:'count/decrement'});
console.log(reduxState);



reduxState=reducer(reduxState,{type:'count/decrementBy',payload:10});
console.log(reduxState);



reduxState=reducer(reduxState,{type:'count/incrementBy',payload:10});
console.log(reduxState);