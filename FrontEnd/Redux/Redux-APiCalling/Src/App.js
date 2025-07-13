import React from 'react'
import store from './Utils/Store'
import { Provider } from "react-redux"

function App() {
    return (
        <Provider store={store}>
            <div> Welcome to the App </div>
        </Provider>
    )
}

export default App