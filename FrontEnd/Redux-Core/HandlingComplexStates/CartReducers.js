// This is the cartList reducer which we are writing we have to write diffrent reducer for each state in store otherwise it will be very unmaintanble to manage states for whole application in one reducer

// action type ke variables
const Addcart = 'cart/AddItem';
const Removecart = 'cart/RemoveItem';
const CartItemQunatityIncrease = 'cart/IncreaseQuantity';




// Creating the reducer function for the cartItems
 export default function Cartreducer(state = [], action) {
    console.log("cartReduer is called");

    if (action.type === Addcart) {
        return [...state,action.payload];
    }

    return state;
}