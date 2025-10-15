import {createStore,combineReducers} from "redux"
import countReducer from "./countReducer"
import productListReducer from "./productListReducer"
import cartReducer from "./CartReducer"


// yaha combine krdiye saare reducers ek saath because ek akele reducer se work flow aaccha nahi chlta isliye jitni slices rakhni hai utne reducers banao tabhi work flow easy rhega aur logic bloat nahi hoga
const reducer=combineReducers({
    products:productListReducer,
    cartItems:cartReducer,
    count:countReducer
})


// yaha store create krunga using createStore fun ction of redux woh reducer lega jo upar tayyar hai abh isko react ki application ke saath connect krna hai 
const Store=createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

export  default Store;

