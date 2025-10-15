import App from "./components/App";
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux"

const root=ReactDOM.createRoot(document.querySelector(".root"));
root.render(
    <App/>
)