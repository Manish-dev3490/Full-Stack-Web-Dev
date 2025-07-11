import { configureStore } from "@reduxjs/toolkit";
import firstSlice from "./InitialSlice"

const Stores=configureStore({
    reducer:{
        slice1:firstSlice,
    }
})

export default Stores;