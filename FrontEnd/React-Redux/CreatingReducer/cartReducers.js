// Action Types
export const cart_Add_Item = "cart/AddItem";
export const cart_Remove_Item = "cart/RemoveItem";
export const cart_Increase_Quantity = "cart/IncreaseQuantity";
export const cart_Decrease_Quantity = "cart/DecreaseQuantity";

// Reducer using if-else
export default function cartReducer(state = [], action) {

    if (action.type === cart_Add_Item) {
        return [...state, action.payload];
    }

    else if (action.type === cart_Remove_Item) {
        return state.filter(item => item.productID !== action.payload.productID);
    }


    else if (action.type === cart_Increase_Quantity) {
        return state.map(item => {
            if (item.productID === action.payload.productID) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                };
            }
            return item;
        });
    }

    else if (action.type === cart_Decrease_Quantity) {
        return state.map(item => {
            if (item.productID === action.payload.productID && item.quantity > 1) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                };
            }
            return item;
        });
    }

    return state;
}
