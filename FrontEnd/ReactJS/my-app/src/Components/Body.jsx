import { useState } from "react";
import data from "../utils/mock";
import Card from "./Card";
import FilterRastaurants from "./FilterRastaurants";

// This is the Body level componnent for our application

const Body = () => {
  const restaurants = data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
  const[value,setValue]=useState(restaurants);
  

  return (
    <div className="body-container">
      <div className="search-bar">
        <input className="search-area" type="text" placeholder="search your favourite restaurent" />
        <button className="srch-btn">Search</button>
        <FilterRastaurants value={value} setValue={setValue} />

      </div>


      <div className="res-container">
        <>
          {
            value.map((resCard) => {
              return <Card key={resCard.info.id} resData={resCard.info} />
            })
          }
        </>
      </div>
    </div>
  )
}

export default Body