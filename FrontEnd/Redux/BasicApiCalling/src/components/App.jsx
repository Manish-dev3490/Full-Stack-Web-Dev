import React from 'react'
import { Provider } from 'react-redux'
import store from '../../../Redux-APiCalling/Src/Utils/Store'
import Body from './Body'
function App() {
  return (
    <Provider store={store}>
      <div>Welcome to the Application</div>
      <Body/>
    </Provider>
  )
}

export default App