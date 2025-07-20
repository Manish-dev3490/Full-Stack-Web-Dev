// redux has deprecated the createStore now they offer redux toolkit configureStore function to setup a store but for learning purposes we can still use legacy createStore
import { createStore } from "redux";

// creating the initial state for using it in the reducer
let initialState = {
    count: 0,
    name: "manish",
    age: 22,
    conatct: 9643623490,
    address: "359 chirag delhi",
    qualiication: "BCA",
};


const INCREMENT = 'count/increment';
const DECREMENT = 'count/decrement';
const DECREASE_BY = 'count/decrementBy';
const INCREASE_BY = 'count/incrementBy';






// Reducer is jese hamare store me states hoti hai unko hum directly modify nahi kar sakte unko update karne ke liye reducer function hote hai jinko use karke hum state ko change yah update kar sakte hai .Aur reducers function ke andar hum actions define karte jese humko jo kaam karvana hai. let me explian you breifly jese ki there is a global store and there are multiple state in that now i am using those states in my Appication and now we want to update tose state oon the event but we are not allowed to directly modify the states || we cannot mutate the state object to update the store states there is a feauture reducers reducers is nothing but functions are implemented in reducers which are used to update the states and those functions are called actions .those actions contains the type for verifyung.reducer have access to store and actions.
function reducer(state = initialState, action) {
    if (action.type === INCREMENT) {
        return { ...state, count: state.count + 1 };
    } else if (action.type === DECREMENT) {
        return { ...state, count: state.count - 1 };
    } else if (action.type === DECREASE_BY) {
        return { ...state, count: state.count - action.payload };
    } else if (action.type === INCREASE_BY) {
        return { ...state, count: state.count + action.payload };
    } else return state;
}

// createStore is a function which was used in the early days but now the people hve been migrated to the redux toolkit but before move to the redux toolkit let us learn the core redux . and nowdays we use configureStore() for creating the store but earlier we used createStore for creating the stiore as the name defines.So createStore function reducer ko leta hai reducer ko access hota hai initialState ka aur actions ka.
const Store = createStore(reducer);


// Abh jese hee state update hori hai toh humko store.getState() karke dekhni padd rhi hai uske liye bhi ek function hai subscribe
Store.subscribe(function () {
    console.log(Store.getState());

})



// Abh me chahta hu ki states ko update kru lekin woh kese hogi toh humko store ek function deta hai dispatch(action) iske andar humko action daalna padta hai aur dispatch store ke paas jaayega aur reducer ko call krega behind the scenes aur us action ke andar type,payload hoga reducer ke andar define hoga toh reducer usko call kar dega.let see in the example
Store.dispatch({ type: INCREMENT, payload: undefined });
Store.dispatch({ type: DECREMENT, payload: undefined });

Store.dispatch({ type: INCREASE_BY, payload: 10 });
Store.dispatch({ type: DECREASE_BY, payload: 10 });



Store.dispatch({ type: INCREASE_BY, payload: 10 });
Store.dispatch({ type: DECREASE_BY, payload: 10 });

Store.dispatch({ type: INCREASE_BY, payload: 10 });
Store.dispatch({ type: DECREASE_BY, payload: 10 });

