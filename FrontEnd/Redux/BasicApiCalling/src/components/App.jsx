import React from 'react'
import { Provider } from 'react-redux'
import store from '../../../Redux-APiCalling/Src/Utils/Store'
function App() {
  return (
    <Provider store={store}>
      <div>Welcome to the Application</div>
    </Provider>
  )
}

export default App