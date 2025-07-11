import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./InitialSlice"

const Stores=configureStore({
    reducers:{
        slice1:sliceReducer,
    }
})