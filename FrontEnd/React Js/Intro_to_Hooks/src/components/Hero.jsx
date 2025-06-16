import ReactDOM from "react-dom/client"
import App from "../App";
import { reRender } from "../Main";
// I am trying to change the value onClick but i am unable to because App component ek baar render hora hai usme ek heee baar Hero render hora hai a ki value toh change hri hai lekin re-render krna padega humko value dikhane ke liye
let a = 10;

function Hero() {

    function increase() {
        a++;
       reRender();
    }
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
            <p style={{ fontSize: "2rem" }}>{a}</p>
            <button onClick={increase} style={{ cursor: "pointer" }}>Increase the count</button>
        </div>
    );
}



export default Hero;
