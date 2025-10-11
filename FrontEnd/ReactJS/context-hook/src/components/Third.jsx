import React, { useContext } from 'react'
import globalStore from "../global"


function Third() {
  const data=useContext(globalStore)
  console.log(data);
  
  return (
    <div>Third {data.name}</div>
  )
}

export default Third