import {configureStore} from "@reduxjs/toolkit"
import slice1Reduser from '../Utils/Slice1'

const store=configureStore({
    reducer:{
        slice1:slice1Reduser
    }
})

export default store;
