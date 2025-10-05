import { imgURL } from "../utils/constData";
import {Link} from 'react-router'

const Card = (props) => {
  const{ resData}=props;
  
  return (
    <Link  to={`/Detail/${resData.id}`} className="card-link">
    <div className="res-card">
      <div className="card-desc" >
        <img src={imgURL+resData.cloudinaryImageId} alt="restaurants"/>
        <h3>{resData.costForTwo}</h3>
        <h4>{resData.avgRating} Stars</h4>
        <p>{resData.name}</p>
        <p>Delivery Time-  {resData.sla.slaString}</p>
        <p>cuisines- {resData.cuisines.join(",")}</p>

      </div>
    </div>
    </Link>
  )
}

export default Card