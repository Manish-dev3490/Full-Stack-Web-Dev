import { createStore, combineReducers } from "redux";
import productReducers from "./productReducers";
import cartReducer from "./cartReducers";
import wishListReducer from "./wishListReducer";


// using combineReducers function for combining some reducers into one reducer
const reducer = combineReducers({
  products: productReducers,
  cartList: cartReducer,
  wishList: wishListReducer
})

// creating the global redux store --> Store takes two parameters first one is reducer and second one for connecting react with redux dev tools
const Store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
