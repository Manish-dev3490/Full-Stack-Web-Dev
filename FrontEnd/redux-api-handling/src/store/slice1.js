import { createSlice } from "@reduxjs/toolkit"

const slice1 = createSlice({
    name: "slice1",
    initialState: {
        loading: false,
        data: [],
        error: null
    },
    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },

        setData: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        },

        setError: (state, action) => {
            state.error = action.payload;
        }
    },

})

export default slice1.reducer;
export const { setData, setError, setLoading } = slice1.actions