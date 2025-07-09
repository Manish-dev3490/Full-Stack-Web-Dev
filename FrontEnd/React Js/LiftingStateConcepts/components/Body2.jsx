import React from 'react'

function Body2({ count, setcount }) {
  return (
    <div>
      <button onClick={() => setcount(count - 1)}>Decrease</button>
    </div>
  )
}

export default Body2