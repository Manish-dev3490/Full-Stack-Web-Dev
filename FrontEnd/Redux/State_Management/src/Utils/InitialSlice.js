import { createSlice } from "@reduxjs/toolkit"
const firstSlice = createSlice({
    name: "pehliSlice",
    initialState: {
        count: 0
    },
    reducers: {
        Increment: (state) => { state.count = state.count + 1 },
        Decrement: (state) => { state.count = state.count - 1 },
        Reset: (state) => { state.count = 0 },
    }
})



export const {Increment,Decrement,Reset}=firstSlice.actions  
export default firstSlice.reducer;
