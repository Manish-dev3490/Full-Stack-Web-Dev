import React, { useEffect, useState } from 'react'
import Shimmerui from './Shimmerui';
import Card from './Card';

function Body() {
  const [productData, setProductData] = useState([]);
  const [productCategory, setProductCategory] = useState(null);
  const [selectedcategory,setSelectedCategory]=useState(null);

  
console.log(productData.length);

  useEffect(() => {
    async function fetchdata() {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProductData(data.products);

    }

    async function getCategory() {
      const response = await fetch('https://dummyjson.com/products/categories');
      const data = await response.json();
      setProductCategory(data);
    }


    fetchdata();
    getCategory();
  }, [])

  useEffect(()=>{
    async function getCategoryData() {
      if(selectedcategory!=null){
        const response = await fetch(`https://dummyjson.com/products/category/${selectedcategory}`);
      const data = await response.json();
      setProductData(data.products);
      console.log(data);
      }
      else return;
      
    }
    getCategoryData();
  },[selectedcategory])

  return (
    <div className='body'>
      {/* this is serach box */}
      <div className="search-box">

        <input
          type='text'
          placeholder='Search your product here...'
        />

        <select className='dropdown'onChange={(e)=>setSelectedCategory(e.target.value)}>
          
          {productCategory ? productCategory.map((category, id) => { return <option key={id}>{category.slug}</option> }) : (<>
            <option>Cars</option>
          </>)}
        </select>

        <button>Search</button>

      </div>

      {/* this is product box jaha products aayege */}
      <div className="product-box">
        {productData ?
          productData.map((card) => {
            return <Card data={card} key={card.id} />
          })
          : <Shimmerui />}
      </div>

      {productData.length>=30?<button className='show-more'>Show More</button>:""}
    </div>
  )
}

export default Body