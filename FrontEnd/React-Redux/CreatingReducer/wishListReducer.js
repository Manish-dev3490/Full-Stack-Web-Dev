// creating the action types
export const WishList_Add_Item = "WishList/AddItem";
export const WishList_Remove_Item = "WishList/RemoveItem";


// this is the wishList Reducer
export default function wishListReducer(state = [], action) {
    if (action.type == WishList_Add_Item) {

    }

    else if (action.type == WishList_Remove_Item) {

    }
    return state;
}
