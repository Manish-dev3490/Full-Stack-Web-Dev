import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer"


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


export default App;