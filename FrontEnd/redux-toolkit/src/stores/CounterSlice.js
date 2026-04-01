import { createSlice } from '@reduxjs/toolkit'

const CounterSlice = createSlice({
    name: "CounterSlice",
    initialState: { count: 0 },
    reducers: {
        Increment: (state) => {
            state.count = state.count + 1;
        },
        Decrement: (state) => {
            state.count = state.count - 1;
        },
        Reset: (state) => {
            state.count = 0;
        },
    }
})



export { CounterSlice }
export const { Increment, Decrement, Reset } = CounterSlice.actions;
export default CounterSlice.reducer;