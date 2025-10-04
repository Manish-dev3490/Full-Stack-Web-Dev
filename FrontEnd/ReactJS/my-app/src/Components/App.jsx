import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// This is our App level component all the other sub component will be inside it 
const App = () => {
    return (
        <div className="App-Comp">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

createRoot(document.getElementById('root')).render(

    <App />
 
)


export default App;