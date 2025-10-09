import React from 'react';
import { useParams } from 'react-router';
import Header from './Header';
import Footer from "./Footer";
import { imgURL } from '../utils/constData';
import useDetail from '../hooks/useDetail';
import RastaurantCategory from './RastaurantCategory';

function Detail() {
  const { id } = useParams();
  const resData = useDetail(id);


  // 🌀 LOADING STATE (Jab resData null ho)
  if (!resData) {
    return (
      <>
        <Header />
        <div className="spinner-container">
          <div className="spinner"></div>
          <p>Loading restaurant details...</p>
        </div>
      </>
    );
  }



  const info = resData.data.cards[2].card.card.info;
  const categories = resData.data.cards[4]?.groupedCard.cardGroupMap.REGULAR;
  
  const filteredCategory = categories.cards.filter(
    (category) =>
      category?.card?.card?.['@type'] ===
      'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory' ||
      category?.card?.card?.['@type'] ===
      'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory'
  );
  console.log(filteredCategory);
  

  return (
    <>
      <Header />
      <div className="detail-container">
        {/* LEFT SIDE - IMAGE */}
        <div className="detail-left">
          <img
            src={`${imgURL}${info.cloudinaryImageId}`}
            alt={info.name}
            className="detail-image"
          />
        </div>

        {/* RIGHT SIDE - TEXT DATA */}
        <div className="detail-right">
          <h1 className="detail-title">{info.name}</h1>
          <p className="detail-cuisines">{info.cuisines.join(', ')}</p>
          <p className="detail-area">
            📍 {info.locality}, {info.areaName}
          </p>

          <div className="detail-stats">
            <span>⭐ {info.avgRatingString} ({info.totalRatingsString})</span>
            <span>🕒 {info.sla?.deliveryTime} mins</span>
            <span>💰 {info.costForTwoMessage}</span>
          </div>

          {info.city && <p className="detail-city">🏙️ City: {info.city}</p>}
          {info.type && <p className="detail-type">🍽️ Type: {info.type}</p>}

          {info.aggregatedDiscountInfoV2?.header && (
            <div className="detail-offer">
              <h3>🔥 {info.aggregatedDiscountInfoV2.header}</h3>
            </div>
          )}

          {info.expectationNotifiers?.length > 0 && (
            <div className="detail-notifiers">
              <h4>ℹ️ Extra Info</h4>
              {info.expectationNotifiers.map((notifier, index) => (
                <p key={index}>{notifier.enrichedText || notifier.text}</p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* recommednded sextion for making acordions */}
      <div className='category'>
        {filteredCategory.map((category) => {
          return <RastaurantCategory key={category.card.card.categoryId} data={category} />
        })}
      </div>

      <Footer />
    </>
  );
}

export default Detail;
