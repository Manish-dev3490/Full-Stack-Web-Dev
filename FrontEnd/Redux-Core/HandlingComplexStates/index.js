import { legacy_createStore } from "redux";
import products from "./mockdata";

// This will be the intial state for the reducer
let initialState={
    productsList:products,
    wishList:[],
    cartItems:[]
}


// Creating the reducer function
function reducer(state=initialState,action){
return state;
}




// this is the store we are creating with the functin which is given us byb the redux library
const Store=legacy_createStore(reducer,initialState,window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log(Store.getState())