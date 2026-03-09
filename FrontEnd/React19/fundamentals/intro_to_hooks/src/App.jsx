import ReactDOM from "react-dom/client"
export function App() {
    let count = 0
    return (
        <>
            <p className="para">{count}</p>
            <button
                onClick={function () {
                    count++;

                }}
            >
                Increment
            </button>
            <button
                onClick={function () {
                    count--;

                }}
            >
                Decrement
            </button>
        </>
    );
}