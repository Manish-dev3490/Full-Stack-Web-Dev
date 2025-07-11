import React from 'react'
import Counter from './components/Counter';
import Stores from './Utils/Store';
import {Provider} from "react-redux";


// hum dekhege hamara slice jo create karte hai woh behind the scenes kesi hai kya hai - i understood it
// import { firstSlice } from './Utils/InitialSlice';
// console.log(firstSlice);



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