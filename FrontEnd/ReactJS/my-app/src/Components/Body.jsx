import { useState, useEffect } from "react";
import Card from "./Card";
import FilterRastaurants from "./FilterRastaurants";
import { swiggyApi } from "../utils/constData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [value, setValue] = useState([]);
  const [localValue, setLocalValue] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async function () {
    const data = await fetch(swiggyApi);
    const res = await data.json();
    const restaurants =
      res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setValue(restaurants);
    setLocalValue(restaurants);
  };

  return (
    <div className="body-container">
      <div className="search-bar">
        <input
          className="search-area"
          type="text"
          placeholder="search your favourite restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}/>
        <button
          className="srch-btn"
          onClick={() => {
            const filteredData = localValue.filter((resCard) => {
              return resCard.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
              setValue(filteredData);
          }} >
          Search
        </button>
        <FilterRastaurants value={value} setValue={setValue} />
      </div>
      <div className="res-container">
        {value.length === 0 ? (
          <Shimmer />
        ) : (
          value.map((resCard) => (
            <Card key={resCard.info.id} resData={resCard.info} />
          ))
        )}
      </div>
    </div>
  );
};
export default Body;
