import { useState } from "react";
import Card from "./Card";
import FilterRastaurants from "./FilterRastaurants";
import Shimmer from "./Shimmer";
import useBody from "../hooks/useBody";
import useOnlineStatus from '../hooks/useOnlineStatus'

const Body = () => {
  const bodyData = useBody(); // original data from API
  const [displayData, setDisplayData] = useState(null); // 👈 UI ke liye state
  const [searchText, setSearchText] = useState("");

  if (bodyData && displayData === null) {
    setDisplayData(bodyData);
  }

  const state=useOnlineStatus();
  
  if(state===false){
    return (
      <><h1>You are not online !! please check your internet connection </h1></>
    )
  }

  return  (
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
        )  : (
          displayData.map((resCard) => (


            // if rescard has discount toh higher order component k render
            <Card key={resCard.info.id} resData={resCard.info} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
