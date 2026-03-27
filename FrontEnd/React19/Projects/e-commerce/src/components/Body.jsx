import React, { useEffect, useRef, useState } from 'react'
import Shimmerui from './Shimmerui';
import Card from './Card';

function Body() {
  const [productData, setProductData] = useState([]);
  const [productCategory, setProductCategory] = useState(null);
  const [selectedcategory, setSelectedCategory] = useState(null);
  const [searchedData, setsearchedData] = useState([]);
  const searchData = useRef();




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

  useEffect(() => {
    async function getCategoryData() {
      if (selectedcategory != null) {
        const response = await fetch(`https://dummyjson.com/products/category/${selectedcategory}`);
        const data = await response.json();
        setProductData(data.products);
        console.log(data);
      }
      else return;

    }




    getCategoryData();
  }, [selectedcategory])


  useEffect(() => {
    async function allproducts() {
      const res = await fetch('https://dummyjson.com/products?limit=194');
      const data = await res.json();
      setsearchedData(data.products)
    }

    allproducts();


  }, [])

  function handleSearch() {
    const searchVal = searchData.current.value.toLowerCase();

    const words = searchVal.split(" "); // multiple words

    const searchingData = searchedData.filter((item) => {
      const desc = item.description.toLowerCase();

      // agar ek bhi word match ho jaye
      return words.some((word) => desc.includes(word));
    });
    console.log(searchingData.length);
    
    if(searchingData.length>0)setProductData(searchingData); 
    else {
      alert("You  dont data related to this value");
      setProductData(productData)
    }
  }

  return (
    <div className='body'>
      {/* this is serach box */}
      <div className="search-box">

        <input
          ref={searchData}
          type='text'
          placeholder='Search your product here...'
        />

        <select className='dropdown' onChange={(e) => setSelectedCategory(e.target.value)}>

          {productCategory ? productCategory.map((category, id) => { return <option key={id}>{category.slug}</option> }) : (<>
            <option>Cars</option>
          </>)}
        </select>

        <button onClick={handleSearch}>Search</button>

      </div>

      {/* this is product box jaha products aayege */}
      <div className="product-box">
        {productData ?
          productData.map((card) => {
            return <Card data={card} key={card.id} />
          })
          : <Shimmerui />}
      </div>

      {productData.length >= 30 ? <button className='show-more'>Show More</button> : ""}
    </div>
  )
}

export default Body