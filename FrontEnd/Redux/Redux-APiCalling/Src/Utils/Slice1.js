import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const fetchCyrpto = createAsyncThunk(
    'Coin/fetch',
    async (args, thunkApi) => {
        try {
            const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${args}`);
            const data = await res.json();
            return data;
        }

        catch (error) {
            return rejectWithValue(error.message);
        }
    }
)


const slice1 = createSlice({
    name: "firstSlice",
    initialState: { data: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCyrpto.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(fetchCyrpto.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchCyrpto.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }

})

export default slice1.reducer;
export {fetchCyrpto};