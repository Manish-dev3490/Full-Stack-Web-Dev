import ReactDOM from 'react-dom/client'
import App from '../App'
let a=1;
 export function Counter() {
  function increase (){
    console.log(a);
    ReactDOM.createRoot(document.getElementById("root")).render(<App/>)
    a++;
  }
  return (
    <div className='Counter-div' style={{backgroundColor:"antiquewhite" , textAlign:'center' ,paddingBlock:'2rem'}}>
        <h2 style={{}}>{a}</h2>
        <button onClick={increase}>Increase this number</button>
    </div>
  )
}

