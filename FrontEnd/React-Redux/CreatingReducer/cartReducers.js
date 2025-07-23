
// creating the action types
export const cart_Add_Item = "cart/AddItem";
export const cart_Remove_Item = "cart/RemoveItem";
export const cart_Increase_Quantity = "cart/IncreaseQuantity";
export const cart_Decrease_Quantity = "cart/DecreaseQuantity";



// here i am creating a cart Reducer
export default function cartReducer(state = [], action) {
    if (action.type == cart_Add_Item) {

    }

    else if (action.type == cart_Remove_Item) {

    }

    else if (action.type == cart_Increase_Quantity) {

    }


    else if (action.type == cart_Decrease_Quantity) {

    }

    return state;
}