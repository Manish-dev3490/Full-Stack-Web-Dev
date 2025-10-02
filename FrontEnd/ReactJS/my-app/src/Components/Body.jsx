import { useState } from "react";
import Card from "./Card";
import FilterRastaurants from "./FilterRastaurants";
import { useEffect } from "react";
import { swiggyApi } from "../utils/constData";
import Shimmer from "./Shimmer";

// This is the Body level componnent for our application
const Body = () => {
  // state variables for our compnents
  const [value, setValue] = useState([]);

  // iske andar ka callback function will run after component will render
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async function () {
    const data = await fetch(swiggyApi);
    const res = await data.json();
    const restaurants =
      res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setValue(restaurants);
  };

  return (
    <div className="body-container">
      <div className="search-bar">
        <input
          className="search-area"
          type="text"
          placeholder="search your favourite restaurent"
        />
        <button className="srch-btn">Search</button>
        <FilterRastaurants value={value} setValue={setValue} />
      </div>
      <div className="res-container">
        {value.length === 0 ?<Shimmer />
         : (
          value.map((resCard) => (
            <Card key={resCard.info.id} resData={resCard.info} />
          ))
        )}
      </div>
    </div>
  );
};
export default Body;
