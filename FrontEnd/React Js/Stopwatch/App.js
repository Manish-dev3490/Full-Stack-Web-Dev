import React, { useRef, useState } from 'react'

function App() {

    // this is the variable will denote timer value
    const [timer, settimer] = useState(0);
    const currVal = useRef(null);

    // To make the stopwatch start
    function start() {
        currVal.current = setInterval(() => {
            settimer((val) => val + 1);


        }, 1000)
    }


    // To make the stopwatch stop
    function stop() {

        clearInterval(currVal.current);

    }

    // To make the stopwatch reset
    function reset() {
        clearInterval(currVal.current);
        currVal.current = null;
        settimer(currVal.current)

    }

    return (
        <div>
            <h2>stopwatch is {timer}</h2>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>

        </div>
    )
}

export default App