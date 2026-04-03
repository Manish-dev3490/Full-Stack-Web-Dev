import React from "react";
import fetchData from "../store/fetchData";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Body() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const { loading, error, data } = useSelector((store) => store.slice1);

  if (loading) return <h1>Data is loading</h1>;

  return (
    <div style={{display:"flex" , flexWrap:"wrap",gap:"10px"}}>
      {data.map((item) => {
        return (
          <div style={{border:"2px solid black"}} key={item.id}>
            <p>{item.title}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Body;
