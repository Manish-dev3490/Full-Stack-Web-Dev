import productList from "./productList";
import { createStore } from "redux";


// So in this reducer i am only doing cartItems insertion and deletion and logic dekho kitna bada hogya so agar assume kro humko ek ecommerce ka pura logic likhna padd jaaye toh reducer kitna untidy un maintainer hojayega koi nahi samjh paayega . s hum alag alag reducer likhte hai according to the work and unko combine kr dete hai ek reducer me 


// creating the initial state for the reducer
let initialState = {
  products: productList,
  cartItems: [],
  wishList: [],
};

// creating the reducer for passing it to the store
function reducer(state = initialState, action) {
  // handling condition for adding items from cart
  if (action.type == "cart/addItems") {
    return { ...state, cartItems: [...state.cartItems, action.payload] };
  }

  // handling condition for removing items from cart
  else if (action.type == "cart/removeItems") {
    return {
      ...state,
      cartItems: state.cartItems.filter((cart) => {
        return cart.productID !== action.payload.productID;
      }),
    };
  }

  // handling condition for increasingItemQuantity
  else if (action.type == "cart/increaseItemQuantity") {
    return {
      ...state,
      cartItems: state.cartItems.map((cart) => {
        if (cart.productID === action.payload.productID) {
          return { ...cart, quantity: cart.quantity + 1 };
        }
        return cart; // very important to return cart if no match
      }),
    };
  }



  // handling condition for decreasingItemQuantity
  else if (action.type == "cart/decreaseItemQuantity") {
    return {
      ...state,
      cartItems: state.cartItems.map((cart) => {
        if (cart.productID === action.payload.productID) {
          return { ...cart, quantity: cart.quantity - 1 };
        }
        return cart; // very important to return cart if no match
      }),
    };
  }
  return state;
}

// creating the global redux store --> Store takes two parameters first one is reducer and second one for connecting react with redux dev tools
const Store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
Store.dispatch({
  type: "cart/addItems",
  payload: { productID: 1, quantity: 1 },
});
Store.dispatch({
  type: "cart/addItems",
  payload: { productID: 2, quantity: 1 },
});
Store.dispatch({
  type: "cart/addItems",
  payload: { productID: 3, quantity: 1 },
});
Store.dispatch({ type: "cart/removeItems", payload: { productID: 3 } });
Store.dispatch({
  type: "cart/increaseItemQuantity",
  payload: { productID: 2 },
});
Store.dispatch({
  type: "cart/increaseItemQuantity",
  payload: { productID: 2 },
});
Store.dispatch({
  type: "cart/increaseItemQuantity",
  payload: { productID: 2 },
});
Store.dispatch({
  type: "cart/increaseItemQuantity",
  payload: { productID: 2 },
});


Store.dispatch({
  type: "cart/decreaseItemQuantity",
  payload: { productID: 2 },
});

