import data from "../assets/mock";
import Card from "./Card";

// This is the Body level componnent for our application

const Body = () => {
  console.log(data.data.cards);
  
  return (
    <div className="body-container">

      
      <div className="search-bar">
        <input className="search-area" type="text" placeholder="search your favourite restaurent"/>
        <button className="srch-btn">Search</button>
      </div>


      <div className="res-container">
        {
          <>
          <Card resData={data}/>
          <Card resData={data}/>
          <Card resData={data}/>
          <Card resData={data}/>
          <Card resData={data}/>
          <Card resData={data}/>

          </>
        }
      </div>
    </div>
  )
}

export default Body