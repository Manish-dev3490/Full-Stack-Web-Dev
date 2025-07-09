import Hero from "./components/Hero"

// This is our whole application where all the components will come

function App() {
    return (
        <>
            <h2 style={{ textAlign: "center", marginBlock: "1rem", backgroundColor: "aqua", paddingBlock: "1rem" }}>Welcome to the Application</h2>
            <Hero />
        </>
    )
}

export default App