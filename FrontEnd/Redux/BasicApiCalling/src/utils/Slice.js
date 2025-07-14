import { createSlice } from '@reduxjs/toolkit';


const Slice1 = createSlice({
    name: 'EcommerceData',
    initialState: { Data: null, loading: false, error: null },
    reducers: {
        updateData: (state, action) => {
            state.Data = action.payload;
        },
        loadingData: (state, action) => {
            state.loading = true;
            state.loading = action.payload;
        },
        errorHandler: (state, action) => {
            state.error = action.payload;
        }
    }
})

export default Slice1.reducer;
export const {updateData,loadingData,errorHandler}=Slice1.actions;