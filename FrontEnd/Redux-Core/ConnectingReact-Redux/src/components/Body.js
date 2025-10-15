import React from "react";
import Card from "./Card";
import {useSelector} from "react-redux"
const Body = () => {
  const products=useSelector((state)=>state?.products);
  console.log(products);
  

  return (
    <main
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#f8f8f8",
        minHeight: "100vh",
      }}
    >
      {/* Sample product cards (tu baad me map() lagayega yahan) */}
      {
        products?.map((productItem)=>{
          return <Card key={productItem.id} data={productItem}/>
        })
      }
    </main>
  );
};

export default Body;
