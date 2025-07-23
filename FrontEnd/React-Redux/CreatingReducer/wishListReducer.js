// Action Types
export const WishList_Add_Item = "WishList/AddItem";
export const WishList_Remove_Item = "WishList/RemoveItem";

// Reducer using if-else
export default function wishListReducer(state = [], action) {
    if (action.type === WishList_Add_Item) {
        return [...state, action.payload];
    }

    else if (action.type === WishList_Remove_Item) {
        return state.filter(item => item.productID !== action.payload.productID);
    }

    return state;
}
