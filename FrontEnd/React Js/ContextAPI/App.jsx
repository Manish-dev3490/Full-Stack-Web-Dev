import React, { useState } from 'react'
import Second from './components/Second';
import Third from './components/Third';

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