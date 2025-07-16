// Card.js
import React from 'react';

function Card({ card }) {
    console.log(card);

    return (
        <div className='card' key={card.id}>
            <img src={card.thumbnail} alt='' />
            <p>{card.title}</p>
            <h2>{card.brand}</h2>
            <p>{card.description}</p>
        </div>
    );
}

export default Card;
