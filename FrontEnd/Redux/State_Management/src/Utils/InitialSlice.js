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


// Humne yaha par in reducer function ko firstSlice.actions krke export kyu kiya hai kyuki abh yeh actions bann gye hai abh yeh apne andar ek special information rakhte hai ki yeh kiss slice se belong karte hai aur now they are the action now..
export const { Increment, Decrement, Reset } = firstSlice.actions;
export {firstSlice};
export default firstSlice.reducer;
