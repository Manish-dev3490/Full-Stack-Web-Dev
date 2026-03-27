import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function ProductDetail() {

  const { id } = useParams();

  const [productDetail, setProductDetail] = useState(null);

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

        <button style={{
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