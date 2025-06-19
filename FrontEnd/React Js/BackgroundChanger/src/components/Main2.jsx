import { useState } from "react";

// This is the main compnent
function Main2() {

    // creating state variables for this Main component
    const [color, setColor] = useState("black");


    // initilizing default color for document body
    document.body.style.backgroundColor = color;

    // created a function for color changing 
    function changeColor(event) {
        console.log(event.target.innerText);
        setColor(event.target.innerText)
        document.body.style.backgroundColor = color;
    }

    return (
        <>
            <h2>Background Color Changer</h2>
            <div onClick={changeColor} className='main-section'>
                <button style={{ backgroundColor: "red" }} className='btn'>Red</button>
                <button style={{ backgroundColor: "blue" }} className='btn'>Blue</button>
                <button style={{ backgroundColor: "green" }} className='btn'>Green</button>
                <button style={{ backgroundColor: "yellow" }} className='btn'>Yellow</button>
                <button style={{ backgroundColor: "orange" }} className='btn'>Orange</button>
            </div>
        </>
    )
}

export default Main2;