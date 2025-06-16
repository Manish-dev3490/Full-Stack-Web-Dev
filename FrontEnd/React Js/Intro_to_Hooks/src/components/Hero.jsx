import React from "react";

let a = 0;
function Hero() {
    return (
        <div
            style={{
                marginBlock: "1rem",
                marginBlock: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "1rem"
            }}
        >
            <p style={{ fontSize: "1rem" }}>{a}</p>
            <button style={{ cursor: "pointer" }}>Increase the count</button>
        </div>
    );
}

export default Hero;
