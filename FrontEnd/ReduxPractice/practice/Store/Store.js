import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./Slicer";

const store=configureStore({
    reducer:{
        slice1:slice1Reducer,
    }
})

export default store;