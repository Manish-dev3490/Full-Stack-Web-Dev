import React from "react";
import { useState } from "react";

function FoodList() {
  const [fooditems, setFoodItems] = useState([
    "Apple",
    "Mango",
    "orange",
    "Banana",
    "guavava",
  ]);
  function increaseFood() {
    setFoodItems(["Grapes", ...fooditems]);
  }
  return (
    <>
      <div>FoodList is here</div>
      <ul>
        {fooditems.map((food) => (
          <li>{food}</li>
        ))}
      </ul>
      <button onClick={increaseFood}>Add one More Food</button>
    </>
  );
}

export default FoodList;
