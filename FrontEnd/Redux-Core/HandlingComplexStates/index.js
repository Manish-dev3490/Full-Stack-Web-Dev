import { combineReducers, legacy_createStore } from "redux";
import ProductReducer from "./ProductsReducer";
import wishlistReducer from "./WishListReducer";
import Cartreducer from "./CartReducers";


const Addcart = 'cart/AddItem';
const Removecart = 'cart/RemoveItem';
const CartItemQunatityIncrease = 'cart/IncreaseQuantity';



// This is where we are combining all the reducers and passing it to the store
const reducer=combineReducers({
    productList:ProductReducer,
    wishList:wishlistReducer,
    cartItems:Cartreducer
})

console.log(reducer);



// this is the store we are creating with the functin which is given us byb the redux library
const Store = legacy_createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

Store.dispatch({ type: Addcart, payload: { id: 1, quantity: 1 } });
Store.dispatch({ type: Addcart, payload: { id: 2, quantity: 1 } });
Store.dispatch({ type: Addcart, payload: { id: 2, quantity: 1 } });
Store.dispatch({ type: Addcart, payload: { id: 2, quantity: 1 } });
Store.dispatch({ type: Addcart, payload: { id: 2, quantity: 1 } });


