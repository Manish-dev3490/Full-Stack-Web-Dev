import { useState } from "react";
import Card from "./Card";
import FilterRastaurants from "./FilterRastaurants";
import { useEffect } from "react";
import fetchData from "../hooks/fetchData";

const Body = () => {
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setValue(data);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <div className="body-container">
      <div className="search-bar">
        <input className="search-area" type="text" placeholder="search your favourite restaurent" />
        <button className="srch-btn">Search</button>
        <FilterRastaurants value={value} setValue={setValue} />
      </div>

     <div className="res-container">
        {loading ? (
          <h2>Loading restaurants...</h2>
        ) : value.length === 0 ? (
          <h2>No restaurants found</h2>
        ) : (
          value.map((resCard) => (
            <Card key={resCard.info.id} resData={resCard.info} />
          ))
        )}
      </div>

    </div>
  )
}
export default Body