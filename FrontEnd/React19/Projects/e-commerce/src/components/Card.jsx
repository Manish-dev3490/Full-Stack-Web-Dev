import React from 'react'

function Card(props) {
    const { id, title, price, discountPercentage,images } = props.data;
    return (
        <div className="product-card" key={id}>
         <img src={images[0]} alt={title} />
            <h3>{title}</h3>
            <p>₹{price}</p>
            <p>{discountPercentage}% OFF</p>
        </div>
    )
}

export default Card