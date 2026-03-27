import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function ProductDetail() {

  const { id } = useParams();

  const [productDetail, setProductDetail] = useState(null);

  function handleCart() {
    // step 1: get existing cart
    const cartarray = JSON.parse(localStorage.getItem("cart")) || [];

    // step 2: product info (chota useful object)
    const productInfo = {
      id: productDetail.id,
      title: productDetail.title,
      price: productDetail.price,
      thumbnail: productDetail.thumbnail,
      quantity: 1
    };

    // step 3: check if already exists
    const exist = cartarray.find(item => item.id === productInfo.id);

    if (exist) {
      // quantity increase
      const updatedCart = cartarray.map(item =>
        item.id === productInfo.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // new item add
      cartarray.push(productInfo);
      localStorage.setItem("cart", JSON.stringify(cartarray));
    }

    alert("Item added to cart ✅");
  }

  useEffect(() => {
    async function getDetail() {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProductDetail(data);
    }

    getDetail();
  }, [id]);

  // 🔥 SHIMMER UI
  if (!productDetail) {
    return (
      <div style={{ padding: "40px" }}>
        <div style={{
          width: "300px",
          height: "300px",
          background: "#ddd",
          borderRadius: "10px"
        }}></div>

        <div style={{
          width: "60%",
          height: "20px",
          background: "#ddd",
          marginTop: "20px"
        }}></div>

        <div style={{
          width: "80%",
          height: "20px",
          background: "#ddd",
          marginTop: "10px"
        }}></div>
      </div>
    );
  }

  // 🔥 REAL UI
  return (
    <div style={{
      display: "flex",
      gap: "40px",
      padding: "75px"
    }}>

      {/* LEFT IMAGE */}
      <div>
        <img
          src={productDetail.thumbnail}
          alt={productDetail.title}
          style={{ width: "350px", borderRadius: "10px" }}
        />
      </div>

      {/* RIGHT DETAILS */}
      <div style={{ maxWidth: "500px" }}>
        <h1>{productDetail.title}</h1>

        <p style={{ marginTop: "10px", color: "gray" }}>
          {productDetail.description}
        </p>

        <h2 style={{ marginTop: "20px" }}>
          ₹ {productDetail.price}
        </h2>

        <p>⭐ Rating: {productDetail.rating}</p>
        <p>📦 Stock: {productDetail.stock}</p>
        <p>🏷 Brand: {productDetail.brand}</p>

        <button onClick={handleCart} style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "black",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;