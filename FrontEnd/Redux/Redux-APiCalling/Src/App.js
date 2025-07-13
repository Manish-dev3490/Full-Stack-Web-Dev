import React from 'react'
import store from './Utils/Store'
import { Provider } from "react-redux"
import CoinCreate from './Components/CoinCreate'

function App() {
    return (
        <Provider store={store}>
            <div> Welcome to the App </div>
            <CoinCreate></CoinCreate>
        </Provider>
    )
}

export default App