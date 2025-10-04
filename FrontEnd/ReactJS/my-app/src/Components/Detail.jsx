import React from 'react';
import { useLocation } from 'react-router'; // make sure this is from 'react-router-dom'
import Header from './Header';
import { imgURL } from '../utils/constData';
import { useEffect } from 'react';
import Footer from "./Footer";

function Detail() {
  const { state } = useLocation();
  const resData = state;
  

  useEffect(()=>{

  },[])


  if (!resData) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>No Restaurant Data Found!</h2>;
  }

  return (
    <>
      <Header />
      <div className="detail-page">
        <div className="detail-left">
          <img 
            src={imgURL + resData.cloudinaryImageId} 
            alt={resData.name} 
            className="detail-image" 
          />
        </div>

        <div className="detail-right">
          <h1>{resData.name}</h1>
          <p><strong>Cuisines:</strong> {resData.cuisines.join(", ")}</p>
          <p><strong>Cost for Two:</strong> {resData.costForTwo}</p>
          <p><strong>Rating:</strong> ⭐ {resData.avgRating} ({resData.totalRatingsString} ratings)</p>
          <p><strong>Location:</strong> {resData.locality}, {resData.areaName}</p>
          <p><strong>Delivery Time:</strong> {resData.sla.slaString}</p>
          {resData.aggregatedDiscountInfoV3 && (
            <p className="offer">
              <strong>Offer:</strong> {resData.aggregatedDiscountInfoV3.header} {resData.aggregatedDiscountInfoV3.subHeader}
            </p>
          )}
          <p><strong>Open Now:</strong> {resData.isOpen ? "Yes ✅" : "No ❌"}</p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Detail;
