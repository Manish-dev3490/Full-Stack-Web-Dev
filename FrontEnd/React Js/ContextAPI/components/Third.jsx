import React from 'react'
import { useContext } from 'react';
import globalContext from '../Global';

function Third() {
   const data= useContext(globalContext);
   console.log(data);
   
  return (
    <div style={{backgroundColor:'aqua'}}>
        <h2>Third Compo  count is : {data} </h2>
    </div>
  )
}

export default Third