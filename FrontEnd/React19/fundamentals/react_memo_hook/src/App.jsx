import React from 'react'
import Sum from './Sum';
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);
    console.log("App is rendered");
    
    return (
        <>
            <p>Counter is : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <Sum></Sum>
        </>
    )
}

export default App