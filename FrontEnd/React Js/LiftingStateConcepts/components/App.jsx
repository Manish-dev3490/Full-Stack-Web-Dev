import React, { useState } from 'react'
import Body from './Body';

function App() {
    const [count, setcount] = useState(0);
    return (
        <div className='App' style={{textAlign:'center', fontSize:'1rem'}}>
            <p>count is {count}</p>
            <Body></Body>
        </div>
    )
}

export default App