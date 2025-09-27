// This is the card component for our application 
const Card = (props) => {
  const { resData } = props;
  let data = resData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info;
  console.log(data);




  return (
    <div className="res-card">
      <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.cloudinaryImageId
        }`} alt="pizza" />
      <div className="card-desc">
        <h3>{data.name}</h3>
        <h4>{data.avgRating}</h4>
        <p>{data.costForTwo}</p>
        <p>Delivery Time  {data.sla.slaString}</p>
        <p>cuisines {data.cuisines[0]}</p>

      </div>

    </div>
  )
}

export default Card