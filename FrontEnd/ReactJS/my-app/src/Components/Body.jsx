import { useState } from "react";
import Card from "./Card";
import FilterRastaurants from "./FilterRastaurants";
import Shimmer from "./Shimmer";
import useBody from "../hooks/useBody";

const Body = () => {
  const bodyData = useBody(); // original data from API
  const [displayData, setDisplayData] = useState(null); // 👈 UI ke liye state
  const [searchText, setSearchText] = useState("");

  // ✅ Jaise hi bodyData aayega, displayData me copy kar dena
  // isko direct render ke andar check karke update na karo warna infinite loop ho jayega
  if (bodyData && displayData === null) {
    setDisplayData(bodyData);
  }

  const handleSearch = () => {
    if (!bodyData) return;

    const filteredData = bodyData.filter((resCard) =>
      resCard.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setDisplayData(filteredData); // 👈 UI me filter apply ho jayega
  };

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
        <button className="srch-btn" onClick={handleSearch}>
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
