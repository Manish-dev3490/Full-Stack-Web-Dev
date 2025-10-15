import App from "./components/App";
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux"
import Store from "./store/store";

const root=ReactDOM.createRoot(document.querySelector(".root"));
root.render(
    <Provider store={Store}>
    <App/>
    </Provider>
)