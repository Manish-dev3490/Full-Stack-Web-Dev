import { useState } from "react";
import Card from "./Card";
import FilterRastaurants from "./FilterRastaurants";
import Shimmer from "./Shimmer";
import useBody from "../hooks/useBody";

const Body = () => {
  const bodyData = useBody(); // original data from API
  const [displayData, setDisplayData] = useState(null); // 👈 UI ke liye state
  const [searchText, setSearchText] = useState("");

  if (bodyData && displayData === null) {
    setDisplayData(bodyData);
  }

  return (
    <div className="body-container">
      <div className="search-bar">
        <input
          className="search-area"
          type="text"
          placeholder="Search your favourite restaurant"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="srch-btn" onClick={() => {
          if (!bodyData) return;

          const filteredData = bodyData.filter((resCard) =>
            resCard.info.name.toLowerCase().includes(searchText.toLowerCase())
          );

          setDisplayData(filteredData); // 👈 UI me filter apply ho jayega
        }}>
          Search
        </button>
        <FilterRastaurants value={displayData} setValue={setDisplayData} />
      </div>

      <div className="res-container">
        {!displayData ? (
          <Shimmer />
        ) : displayData.length === 0 ? (
          <p>No restaurants found 😔</p>
        ) : (
          displayData.map((resCard) => (
            <Card key={resCard.info.id} resData={resCard.info} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
