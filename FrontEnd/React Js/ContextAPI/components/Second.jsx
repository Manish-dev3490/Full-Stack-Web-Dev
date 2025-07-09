import React from 'react'
import Third from './Third'

function Second({count,setcount}) {
  return (
    <div style={{backgroundColor:'green'}}>
        <h1>Second Compo</h1>
        <Third  count={count} setcount={setcount}/>
    </div>
  )
}

export default Second