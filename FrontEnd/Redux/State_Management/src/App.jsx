import React from 'react'
import Counter from './components/Counter';
import Stores from './Utils/Store';
import {Provider} from "react-redux"

function App() {
  return (
   
<Provider store={Stores}>
    <div>
      <h2>Welcome to the App Level Component</h2>
      <Counter></Counter>
    </div>
   </Provider>
  )
}

export default App