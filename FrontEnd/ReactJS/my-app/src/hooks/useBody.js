import { useEffect, useState } from "react";
import { swiggyApi } from "../utils/constData";

const useBody=()=>{
  const [bodyData,setBodyData]=useState(null)

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData=async ()=>{
    const data = await fetch(swiggyApi);
    const res = await data.json();
    const restaurants =res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    
    setBodyData(restaurants);
  }

  return bodyData;
}
export default useBody