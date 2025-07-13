import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchCyrpto } from '../Utils/Slice1';

function CoinCreate() {
    const {data,loading,error}=useSelector((store)=>store?.slice1);
    const dispatch=useDispatch();
    

    useEffect(()=>{
        dispatch(fetchCyrpto(20));
        console.log(data);
        
    },[])

  return (
    <div>

    </div>
  )
}

export default CoinCreate