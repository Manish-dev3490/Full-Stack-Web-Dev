import { useEffect, useState } from "react";

let a = 0;

// This is the main compnent
function Main2() {

    // This is for verifying that our component is getting re-rendered or not
    console.log("Main function is rendering first",a++);

    // creating state variables for this Main component
    const [color, setColor] = useState("black");

    // created a function for color changing 
    function changeColor(event) {
        setColor(event.target.innerText);
    }


    // useEffect hook excecutes in the end of the component when component is rendered completely
    useEffect(function () {
        console.log("use effect call hogya last me sab kuch render hone ke baad");
        document.body.style.backgroundColor = color;
    }, [color])


    console.log("main component render hogya ");
    
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