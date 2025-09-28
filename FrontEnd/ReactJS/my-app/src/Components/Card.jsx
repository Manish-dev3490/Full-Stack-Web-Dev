// This is the card component for our application 
const Card = (props) => {
  const{ resData}=props;
  
  



  return (
    <div className="res-card" >
      
      <div className="card-desc" >
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.cloudinaryImageId
}`} alt="restaurants"/>
        <h3>{resData.costForTwo}</h3>
        <h4>{}</h4>
        <p>{resData.name}</p>
        <p>Delivery Time-  {resData.sla.slaString}</p>
        <p>cuisines- {resData.cuisines.join(",")}</p>

      </div>

    </div>
  )
}

export default Card