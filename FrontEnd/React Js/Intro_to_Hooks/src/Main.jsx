import { StrictMode } from "react";
import App from "./App";
import ReactDOM from "react-dom/client";

// this root element is coming from index.html
const root = ReactDOM.createRoot(document.getElementById("root"));

 export const reRender=function (){
    root.render(<App></App>)
}

// Here we are rendering App component into our main  file
root.render(<StrictMode>
    <App></App>
</StrictMode>)