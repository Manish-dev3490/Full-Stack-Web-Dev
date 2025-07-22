import productList from "./productList";
import { createStore } from "redux";

// creating the initial state for the reducer
let initialState = {
  products: productList,
  cartItems: [],
  wishList: [],
};

// creating the reducer for passing it to the store
function reducer(state = initialState, action) {
  console.log(action);
  return state;
}

// creating the global redux store --> Store takes two parameters first one is reducer and second one for connecting react with redux dev tools
const Store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.());
Store.dispatch({type:'cart/addItems',payload:{productID:1,quantity:1}});
