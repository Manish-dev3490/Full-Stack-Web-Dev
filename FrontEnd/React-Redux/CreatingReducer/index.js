import { createStore, combineReducers } from "redux";
import productReducers from "./productReducers";
import cartReducer from "./cartReducers";
import wishListReducer from "./wishListReducer";
import { cart_Add_Item,cart_Remove_Item,cart_Increase_Quantity,cart_Decrease_Quantity } from "./cartReducers";


// using combineReducers function for combining some reducers into one reducer
const reducer = combineReducers({
  products: productReducers,
  cartList: cartReducer,
  wishList: wishListReducer
})

// creating the global redux store --> Store takes two parameters first one is reducer and second one for connecting react with redux dev tools
const Store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());


// dispatching the actions and they are calling the main reducer 
Store.dispatch({type:cart_Add_Item,payload:{productID:1,quantity:1}});
Store.dispatch({type:cart_Add_Item,payload:{productID:2,quantity:1}});
Store.dispatch({type:cart_Add_Item,payload:{productID:3,quantity:1}});
Store.dispatch({type:cart_Add_Item,payload:{productID:4,quantity:1}});
Store.dispatch({type:cart_Add_Item,payload:{productID:5,quantity:1}});


Store.dispatch({type:cart_Remove_Item,payload:{productID:4}});



// This function will fetch all the updated data from state
Store.getState();

