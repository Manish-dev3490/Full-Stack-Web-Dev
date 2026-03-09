import ReactDOM from "react-dom/client";
import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="para">{count}</p>
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={function () {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </>
  );
}
