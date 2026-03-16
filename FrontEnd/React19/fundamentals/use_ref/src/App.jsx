import React from "react";
import { useState } from "react";

function App() {
    const [time, setTime] = useState(0);
    function handleStart() {
        setInterval(() => {
            console.log("set interval called");
            setTime(time=>time + 1);
        }, 1000)
    }

    function handleStop() {

    }

    function handleReset() {

    }
    return (
        <>
            <h1>Stopwatch time is :{time}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
}

export default App;
