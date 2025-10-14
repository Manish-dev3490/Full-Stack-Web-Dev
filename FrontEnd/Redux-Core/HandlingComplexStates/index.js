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


}





const Store=legacy_createStore(reducer,initialState)