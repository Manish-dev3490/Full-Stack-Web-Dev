import { swiggyApi } from "../utils/constData";
// This is the custom hook i have return to make an api call
const useFetchData = async function () {
    const data = await fetch(swiggyApi);
    const res = await data.json();
    const restaurants = res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    return restaurants;
  }
  export default useFetchData;