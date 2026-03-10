import { useState, useEffect } from "react";

export default function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUser(data.users);
    }

    fetchData();
  }, []);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Users</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "20px"
        }}
      >
        {user.map((data) => (
          <div
            key={data.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              width: "150px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            <img
              src={data.image}
              width="100"
              height="100"
              style={{
                borderRadius: "50%",
                objectFit: "cover"
              }}
            />
            <p style={{ marginTop: "10px", fontWeight: "bold" }}>
              {data.firstName}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}