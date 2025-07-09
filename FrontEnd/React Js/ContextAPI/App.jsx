import React, { useState } from 'react'
import Second from './components/Second';


// So in this file what i am doing creating a state variable and passing to my children and my children is passing to its children this type of chain is known technically props drilling.so problem is assume there are nested children and main component se kuch data bhejna hai end vale children ko jo beech ke hai unke uska koi use nahi hai lekin unke trhough paas hora hai isko hee props drilling kahte hai it is a problem which is solved by useContext Api .

function App() {
    return (
        <div style={{textAlign:'center'}}> 
            <h2>Learning Context Api</h2>
            <Second />
        </div>
    )
}

export default App