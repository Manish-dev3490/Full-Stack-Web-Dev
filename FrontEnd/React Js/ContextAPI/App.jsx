import React, { useState } from 'react'
import Second from './components/Second';
import Third from './components/Third';


// So in this file what i am doing creating a state variable and passing to my children and my children is passing to its children this type of chain is known technically props drilling.

function App() {
    const [count, setcount] = useState(0);
    return (
        <div style={{textAlign:'center'}}> 
            <h2>Learning Context Api</h2>
            <Second count={count} setcount={setcount} />
        </div>
    )
}

export default App