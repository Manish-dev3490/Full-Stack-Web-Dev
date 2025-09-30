import ReactDOM from 'react-dom/client';

function App() {

  let count=0;
  return (
    <>
   <div className="app-component">
    <button className="increase" onClick={()=>{
      console.log(count++);
      
      const root=ReactDOM.createRoot(document.querySelector(".heading"));

    }}>Increase</button>
    <h2 className="heading">{count}</h2>
    <button className="decrease">decrease</button>

   </div>
      
    </>
  )
}

export default App
