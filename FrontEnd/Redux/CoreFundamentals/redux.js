//  Now we are importing create Store from reduzx ----> in this file we are actually going to implement redux and see how actually redux works now let us begin ....
import { createStore } from "redux";

// Now we are going to write the initial state of our application below the lines .
let initialState = {
    count: 0,
    name: "mandeep",
    age: 10,
};




// Now we are going to write the reducers for our store ----> This is the reducer we have written below the lines..
function Reducer(state = initialState, action) {
    // This is the action for incrementing the count
    if (action.type === "count/increment") {
        return { ...state, count: state.count + 1 };
    }

    // This is the action for decrementing the count
    else if (action.type === "count/decrement") {
        return { ...state, count: state.count - 1 };
    }

    // This is the action for decrementing the count by payload will recive an argument
    else if (action.type === "count/decrementby") {
        return { ...state, count: state.count - action.payload };
    }

    // This is the action for incrementing the count by payload will recive an argument
    else if (action.type === "count/incrementby") {
        return { ...state, count: state.count + action.payload };
    } else {
        return state;
    }
}



// Detail about the  createStore  -----> is a function which is used to create Store but it  is deprecasted now it is only used for learning purposes now because redux offers redux toolkit for building application which is a easier way to integrate redux js in your application.So createStore takes three parameters reducer,preloadedState,enhancer but only reducer is mandatory other 2 are optional.Store return some of the vry major difficult jargon like dispatch,susbscribe,replacereducers,observal and some more we awill do a deep dive into that 
const store = createStore(Reducer);

store.subscribe(() => {
    console.log(store.getState());
})


// Here we are updating our state we can actually update state by dispatching an action and then dispatch function goes to the store and calls reducer behind the scenes and reducer have access to initial state and all the action are predefined in it and dispatch paas action to reducer and when action match in reducer function will called and state update 
store.dispatch({ type: 'count/increment' })
store.dispatch({ type: 'count/increment' })



