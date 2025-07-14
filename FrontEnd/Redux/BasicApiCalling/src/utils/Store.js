import { configureStore } from '@reduxjs/toolkit';
import slice1 from "./Slice";

const store = configureStore({
    // it takes all the slices with there reducers
    reducer: {
        Ecommercedata: slice1
    }

})

export default store;