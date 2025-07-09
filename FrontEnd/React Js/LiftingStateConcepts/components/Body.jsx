import React, { useState } from 'react'

function Body({ count, setcount }) {

  return (
    <div>
      <h2>Child count is :{count}</h2>
      <button onClick={() => setcount(count + 1)}>Increase</button>
    </div>
  )
}

export default Body;