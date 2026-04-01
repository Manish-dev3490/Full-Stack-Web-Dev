import React from 'react'
import Counter from './Counter'
import store from '../stores/Global'
import { Provider } from 'react-redux'
import { CounterSlice } from '../stores/CounterSlice'
function App() {
  console.log(CounterSlice);
  
  return (
    <Provider store={store}>
      <div>
        <h2>Counter Application</h2>
        <Counter />
      </div>
    </Provider>
  )
}

export default App