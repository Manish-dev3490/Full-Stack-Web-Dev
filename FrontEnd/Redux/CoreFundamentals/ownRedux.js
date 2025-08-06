// Now i am going to make my own redux library ---> for understaning the concepts like creating store,reducers,actions,initial state,dispatch,subscribe,unsubscribe,getState and some more key concepts...

// Now i am going to create the reducer ---> Reducer is a function in the redux which is used for state change in reducer have access to the initial state of the redux and has all the actins defined in it we are going to create the reducers now.

let initialState = {
    count: 0,
    post: 0,
    name: "manish",
    class: 12
};



const INCREMENT = "count/increment";
const DECREMENT = "count/decrement";
const DECREASE_BY = "count/decrementBy";
const INCREASE_BY = "count/incrementBy";

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

// Now i am creating the store using createStore n my own to understand some concepts.so createStore() in redux is a function which is used to createStore in redux and it takes 3 parameters reducers,preloadedState,enhancer in these oonly reducer is mandatory other are ooptional.createStore function return the store object in which there are multiple of values like observal,getState,dispatch,subscribe,and some more.
function createStore(reducer) {
    let state = reducer(undefined, { type: "@@INIT", payload: undefined });

    const store = {
        getState() {
            return state;
        },

        dispatch(action) {
            
            state = reducer(state, action);
        },

        subscribe(){

        }
    };
    store.dispatch({ type: "@@INIT" });
    return store;
}

// Now i am going to update my state by dispatching the action --> and here i am going to use my createStore which i have created.
const store = createStore(reducer);
console.log(store.getState())
