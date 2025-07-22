import productList from "./productList";
import { createStore } from "redux";

// creating the initial state
let initialState = {
  products: productList,
  cartItems: [],
  wishList: [],
};

// creating the reducer
function reducer(state = initialState, action) {}

// creating the global redux store
const Store = createStore(reducer);
