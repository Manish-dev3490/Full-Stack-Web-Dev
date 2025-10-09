import React, { useState } from 'react';

function RastaurantCategory({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const categoryCard = data?.card?.card;
  const title = categoryCard?.title;
  const items = categoryCard?.itemCards || [];

  return (
    <div className="ras-category">
      {/* Accordion Header */}
      <div className="ras-header" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <span>{isOpen ? '➖' : '➕'}</span>
      </div>

      {/* Accordion Body */}
      {isOpen && (
        <div className="ras-body">
          {items.length > 0 ? (
            <ul>
              {items.map((item) => {
                const info = item.card.info;
                return (
                  <li key={info.id} className="ras-item">
                    <div className="item-left">
                      <p className="item-name">{info.name}</p>
                      {info.description && (
                        <p className="item-desc">{info.description}</p>
                      )}
                      <p className="item-price">
                        ₹ {info.price / 100 || info.defaultPrice / 100}
                      </p>
                    </div>

                    {info.imageId && (
                      <div className="item-right">
                        <img
                          src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.imageId}`}
                          alt={info.name}
                        />
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="no-items">No items available</p>
          )}
        </div>
      )}
    </div>
  );
}

export default RastaurantCategory;
