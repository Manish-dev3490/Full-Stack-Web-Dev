import Card from "../Components/Card";
import data from "../mock";
// This is the Body level componnent for our application

const Body = () => {
  return (
    <div className="body-container">

      
      <div className="search-bar">
        <input className="search-area" type="text" placeholder="search your favourite restaurent"/>
        <button className="srch-btn">Search</button>
      </div>


      <div className="res-container">
        {
        
        }
      </div>
    </div>
  )
}

export default Body