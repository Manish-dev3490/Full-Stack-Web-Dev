import React from "react";
import ReactDOM from "react-dom/client"
import App from "./src/components/App"
import { Provider } from "react-redux";
import store from "./Store/Store";


const root = ReactDOM.createRoot(document.querySelector(".root"))
root.render(<Provider store={store}>
<App></App>
</Provider>);
