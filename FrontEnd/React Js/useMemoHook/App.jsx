import React, { useEffect, useState, useMemo } from 'react'



// In this file we are learning about useMemo hook
function App() {


  // Now this application is becaome very heavy because when we increase the counter calculateFibo function also called but we dont want to call it on counter render so we will use useMemo hook
  const [Number, setnumber] = useState("");
  const [count, setcount] = useState(0);
  // const [result, setResult] = useState(null);


  function calculateFiboo(n) {
    if (n <= 1) return n;
    return calculateFiboo(n - 1) + calculateFiboo(n - 2);
  }


  // doing memoization using useMemo hook
  const result = useMemo(() => {
    return calculateFiboo(Number)
  }, [Number]);


  // doing memoizations using useEffect hook
  // useEffect(() => {
  //   setResult(calculateFiboo(Number));
  // }, [Number])


  return (
    <div className='App-Component'>
      <div className='counter-compo'>
        <h2>Value is {count}</h2>
        <button onClick={() => setcount(count + 1)}>Increase</button>
        <button onClick={() => setcount(count - 1)}>Decrease</button>
      </div>
      <div className='fibo-compo'>
        <h2>Fibonaci number is : {result}</h2>
        <input type="number" value={Number} onChange={(e) => { setnumber(e.target.value) }} />
        <button>Print</button>
      </div>
    </div>
  )
}

export default App