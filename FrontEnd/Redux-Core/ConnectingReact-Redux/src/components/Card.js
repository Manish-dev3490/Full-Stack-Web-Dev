import React from 'react'

function Card() {
    return (
        <>
            <div
                style={{
                    width: "200px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    padding: "15px",
                    textAlign: "center",
                    height: "300px",
                }}
            >
                <img
                    src="https://via.placeholder.com/150"
                    alt="Product"
                    style={{ width: "100%", borderRadius: "5px" }}
                />
                <h3 style={{ margin: "10px 0 5px", fontSize: "18px" }}>Product 1</h3>
                <p style={{ color: "gray", marginBottom: "10px" }}>₹499</p>
                <button
                    style={{
                        backgroundColor: "#222",
                        color: "white",
                        border: "none",
                        padding: "8px 12px",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                    Add to Cart
                </button>
            </div>
        </>
    )
}

export default Card