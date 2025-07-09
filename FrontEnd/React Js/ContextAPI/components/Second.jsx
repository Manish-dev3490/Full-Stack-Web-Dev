import React, { useContext } from 'react'
import Third from './Third'
import globalContext from '../Global'
function Second() {
 const data= useContext(globalContext);
 
  return (
    <div style={{backgroundColor:'green'}}>
        <h1>Second Compo taking value from global :{data.count} </h1>
        <Third/>
    </div>
  )
}

export default Second