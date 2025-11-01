import {createSlice} from "@reduxjs/toolkit"

const reactSlicer=createSlice({
    name:'slice1',
    initialState:{count:0},
    reducers:{
        Increment:(state)=>{state.count=state.count+1},
        Increment:(state)=>{state.count=state.count+1},
        Reset:(state)=>{state.count=0}

    }
})

export default reactSlicer.reducer;