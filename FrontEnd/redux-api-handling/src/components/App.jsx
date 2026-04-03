import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'
import store from "../store/store"
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
    <div>
        <Header/>
        <Body/>
        <Footer/>
    </div>
    </Provider>
  )
}

export default App