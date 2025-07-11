import createSlice from '@reduxjs/toolkit';

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

export default firstSlice.reducer;