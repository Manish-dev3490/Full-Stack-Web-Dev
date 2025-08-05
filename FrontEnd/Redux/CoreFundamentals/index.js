// Now in this file i am going to start learning redux and writes its notes ----> but before moving to the redux let us understand how react updates its states . so in react for updating states that uses concepts of not mutating object directly let us look at the example.
let state = {
    name: "manish",
    class: 12,
    count: 1,
};

// How directly we are nt allowed to mutate state ----> Now i want to change its count value to 2 so one way is to update it like mutating directly let me show you by doing that directly.so this below code will update state directly but react does not understand this ---> state.count=state.count+1;





// How to change state in react behind the scenes ----> Now we have to understand how react do state updation behind the scenes now we a re going to implement that functionality concept which uses changing the object without mutating and react also do like this behind the scenes for updating the state because what we are doing here we are copying all the value of object into new one and updating value in new object now in later state will have totally new object this is how react actuallly do .
function changeState(state) {
    return { ...state, count: state.count + 1 };
}
// state = changeState(state);
// console.log(state);




// How redux js updates state behind the scenes using reducers  ----> Now we have understood how react js behind the changes states now we are going to work with redux for state management so we have to learn how redux js used to change the states behind the scenes for that we have to learn about reducer.Reducer is the most important concept is redux js and very complex one also so let us begin we are making the function and in the redux reducer updates the state and now we are going to look how it updates 

let initialState = {
    count: 0,
    name: 'mandeep',
    age: 10
}


// Now i am explianing about whole functionaliies of Reducers in redux ----> So reducer is the function in the redux js which is used to handle state changes in the redux js library because it has access to the initial state and the action and action are nothing but just an object which contains two key values pairs type:'',payload:'' . i will also explain action later but first let us understood reducers first.

function Reducer(initialState, action) {
    // This is the action for incrementing the count 
    if (action.type === 'count/increment') {
        return { ...initialState, count: initialState.count + 1 };
    }


    // This is the action for decrementing the count 
    else if (action.type === 'count/decrement') {
        return { ...initialState, count: initialState.count - 1 };

    }


    // This is the action for decrementing the count by payload will recive an argument 
    else if (action.type === 'count/decrementby') {
        return { ...initialState, count: initialState.count - action.payload };
    }

    // This is the action for incrementing the count by payload will recive an argument 
    else if (action.type === 'count/incrementby') {
        return { ...initialState, count: initialState.count + action.payload };
    }

    else {
        return initialState;

    }
}

// this is calling the reducer by passing initial state and actin in reducer calling 
initialState = Reducer(initialState, { type: 'count/increment', payload: undefined });
console.log(initialState);


// this is calling the reducer by passing initial state and actin in reducer calling 
initialState = Reducer(initialState, { type: 'count/decrement', payload: undefined });
console.log(initialState);


// this is calling the reducer by passing initial state and actin in reducer calling and also using payload
initialState = Reducer(initialState, { type: 'count/incrementby', payload: 20 });
console.log(initialState);


// this is calling the reducer by passing initial state and actin in reducer calling and also using payload
initialState = Reducer(initialState, { type: 'count/decrementby', payload: 10 });
console.log(initialState);