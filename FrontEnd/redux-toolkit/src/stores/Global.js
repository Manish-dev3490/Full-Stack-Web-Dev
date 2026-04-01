import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterSlice";


const store=configureStore({
    reducer:{
        CounterSlice:CounterReducer
    }
})

export default store