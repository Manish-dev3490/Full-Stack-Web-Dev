import React from 'react'

function Body(props) {
  
  return (
    <div>
      <h2>Child count is :{props.count}</h2>
      <button onClick={()=>props.setcount(props.count+1)}>Increase</button>
    </div>
  )
}

export default Body;