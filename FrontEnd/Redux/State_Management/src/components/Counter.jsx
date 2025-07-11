import React from 'react'
import { useSelector } from 'react-redux'

function Counter() {

    const count = useSelector((store) => store.slice1.count);
    
    return (
        <div>
            <h2>Count is: {count}</h2>
            <button>Increase the count</button>
            <button>Decrease the count</button>
        </div>
    )
}

export default Counter