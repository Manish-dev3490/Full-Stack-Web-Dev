import React from "react";
import Card from "./Card";
import {useSelector} from "react-redux"
const Body = () => {
  const countValue=useSelector((state)=>state?.count);
  console.log(countValue);
  

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
      <Card/>
    </main>
  );
};

export default Body;
