import { legacy_createStore } from "redux";
import products from "./mockdata";

// This will be the intial state for the reducer
let initialState = {
    productsList: products,
    wishList: [],
    cartItems: []
}


// action type ke variables
const Addcart = 'cart/AddItem';
const Removecart = 'cart/RemoveItem';
const CartItemQunatityIncrease = 'cart/IncreaseQuantity';



// Creating the reducer function
function reducer(state = initialState, action) {
    if (action.type === Addcart) {
        return { ...state, cartItems: [...state.cartItems, action.payload] };
    }

    else if (action.type === Removecart) {
        return {
            ...state, cartItems: state.cartItems.filter((cartItem) => {
                return cartItem.id != action.payload.id;
            })
        };
    }

    else if (action.type === CartItemQunatityIncrease) {
        return {
            ...state, cartItems: state.cartItems.map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 }
                }
                else {
                    return { ...cartItem }
                }
            })
        }
    }
    return state;
}




// this is the store we are creating with the functin which is given us byb the redux library
const Store = legacy_createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log(Store.getState())

Store.dispatch({ type: Addcart, payload: { id: 1, quantity: 1 } });
Store.dispatch({ type: Addcart, payload: { id: 2, quantity: 1 } });
Store.dispatch({ type: Addcart, payload: { id: 3, quantity: 1 } });
Store.dispatch({ type: Addcart, payload: { id: 4, quantity: 1 } });
Store.dispatch({ type: Addcart, payload: { id: 5, quantity: 1 } });
Store.dispatch({ type: Addcart, payload: { id: 6, quantity: 1 } });
Store.dispatch({ type: Addcart, payload: { id: 7, quantity: 1 } });
Store.dispatch({ type: Addcart, payload: { id: 8, quantity: 1 } });
Store.dispatch({ type: Addcart, payload: { id: 9, quantity: 1 } });
Store.dispatch({ type: Removecart, payload: { id: 1 } });
Store.dispatch({ type: CartItemQunatityIncrease, payload: { id: 2 } });






console.log(Store.getState());
