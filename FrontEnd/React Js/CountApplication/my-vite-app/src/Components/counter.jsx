import { useState } from "react";

export function Counter() {
  const [val, setVal] = useState(0);


  return (
    <div className='Counter-div' style={{ backgroundColor: "antiquewhite", textAlign: 'center', paddingBlock: '2rem' }}>
      <h2>{val}</h2>
      <button onClick={() => {
        setVal(val + 1)
      }}>Increase this number</button>
    </div>
  )
}

