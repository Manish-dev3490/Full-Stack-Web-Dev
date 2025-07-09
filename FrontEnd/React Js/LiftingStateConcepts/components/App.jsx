import React, { useState } from 'react'
import Body from './Body';
import Body2 from './Body2';

function App() {

    const [count, setcount] = useState(0);


    return (
        <div className='App' style={{ textAlign: 'center', fontSize: '1rem', backgroundColor: 'lavender' }}>
            <p>Parents Count is : {count}</p>
            <Body count={count} setcount={setcount} />
            <Body2 count={count} setcount={setcount} />
        </div>
    )
}

export default App