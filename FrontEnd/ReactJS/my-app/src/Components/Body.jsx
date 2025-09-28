import data from "../assets/mock";
import Card from "./Card";

// This is the Body level componnent for our application

const Body = () => {
  
  return (
    <div className="body-container">
      <div className="search-bar">
        <input className="search-area" type="text" placeholder="search your favourite restaurent"/>
        <button className="srch-btn">Search</button>
      </div>


      <div className="res-container">
       <>
       {
        data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.map((resCard)=>{
          return <Card key={resCard.info.id} resData={resCard.info}/>
        })
       }
       </>
      </div>
    </div>
  )
}

export default Body