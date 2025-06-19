import { StrictMode } from "react";
import App from "./components/App";
import ReactDOM from "react-dom/client"

// created a root and rendred APP component which is the whole data of application
ReactDOM.createRoot(document.querySelector(".root")).render(
    <App></App>
)