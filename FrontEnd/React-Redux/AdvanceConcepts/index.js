import { createStore } from "./myStore";

// creating the initial state for using it in the reducer
let initialState = {
  count: 0,
  name: "manish",
  age: 22,
  conatct: 9643623490,
  address: "359 chirag delhi",
  qualiication: "BCA",
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


const Store=createStore(reducer);
console.log(Store);
