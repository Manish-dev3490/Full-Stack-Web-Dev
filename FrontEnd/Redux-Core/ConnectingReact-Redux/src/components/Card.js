import React from 'react'

function Card(props) {
    const { category, description, image, title, price } = props.data;

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
                    height: "330px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <img
                    src={image}
                    alt="Product"
                    style={{
                        width: "100%",
                        height: "120px",
                        objectFit: "contain",
                        borderRadius: "5px",
                    }}
                />
                <div>
                    <h3 style={{ margin: "10px 0 5px", fontSize: "16px", fontWeight: "600" }}>
                        {title.length > 40 ? title.slice(0, 40) + "..." : title}
                    </h3>
                    <p style={{ color: "gray", marginBottom: "8px", fontSize: "14px" }}>₹{price}</p>
                    <p
                        style={{
                            fontSize: "13px",
                            color: "#555",
                            marginBottom: "12px",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }}
                    >
                        {description}
                    </p>
                </div>

                <button
                    style={{
                        backgroundColor: "#222",
                        color: "white",
                        border: "none",
                        padding: "8px 12px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "14px",
                    }}
                >
                    Add to Cart
                </button>
            </div>
        </>
    );
}

export default Card;
