import React, { useEffect, useState } from 'react'
import Shimmerui from './Shimmerui';
import Card from './Card';

function Body() {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    async function fetchdata() {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProductData(data.products);
      console.log(data.products);

    }

    fetchdata();
  }, [])



  return (
    <div className='body'>
      {/* this is serach box */}
      <div className="search-box">

        <input
          type='text'
          placeholder='Search your product here...'
        />

        <select className='dropdown'>
          <option>All</option>
          <option>Cars</option>
          <option>Bikes</option>
          <option>Phones</option>
          <option>Laptops</option>
        </select>

        <button>Search</button>

      </div>

      {/* this is product box jaha products aayege */}
      <div className="product-box">
        {productData?
        productData.map((card)=>{
          return <Card  data={card} key={card.id}/>
        })
        :<Shimmerui/>}
      </div>
    </div>
  )
}

export default Body