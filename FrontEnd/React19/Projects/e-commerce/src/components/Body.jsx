import React, { useEffect, useState } from 'react'
import Shimmerui from './Shimmerui';
import Card from './Card';

function Body() {
  const [productData, setProductData] = useState(null);
  const [productCategory,setProductCategory]=useState(null);

  useEffect(() => {
    async function fetchdata() {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProductData(data.products);
      console.log(data.products);

    }

    async function getCategory(){
      const response = await fetch('https://dummyjson.com/products/categories');
      const data = await response.json();
      setProductCategory(data);
      console.log(data);
    }
    getCategory();
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
         {productCategory?productCategory.map((category)=>{ return <option>{category.name}</option>}):(<> 
          <option>Cars</option>
          </>)}
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

      <button className='show-more'>Show More</button>
    </div>
  )
}

export default Body