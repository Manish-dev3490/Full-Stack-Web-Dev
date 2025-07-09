import React, { useRef, useState } from 'react'

function App() {

  const [count, setcount] = useState(0)
  let money = useRef(0);



  return (
    <div>
      <h2>count is {count}</h2>
      <button onClick={() => setcount(count + 1)}>Increase</button>

      <h2>money is {money.current}</h2>
      <button onClick={() => {
        money.current++;
        console.log(money.current);

      }}>Increase</button>

    </div>
  )
}

export default App