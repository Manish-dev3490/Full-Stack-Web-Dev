import React, { useEffect} from 'react';
import {useSelector} from 'react-redux'
import FetchDataComponent from '../utils/FetchData';
function Body() {

// it will make api call when body component rendered 



  

  return (
    <div>
      <FetchDataComponent></FetchDataComponent>
    </div>
  )
}

export default Body