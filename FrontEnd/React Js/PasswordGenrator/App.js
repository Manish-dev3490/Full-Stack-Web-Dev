import { useEffect, useState } from "react"

// This is our main App component whole data of application will be under this component
const App = () => {
  const [password, setpassword] = useState("ABcdjehsgys");
  const [length, setlength] = useState(10);
  const [numberChanged, setnumberchanged] = useState(false);
  const [charChanged, setcharchanged] = useState(false);


  function generatePaasword(){
    let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(numberChanged){
      str+='0123456789';
    }

    if(charChanged){
      str+='!@#$%^&*()-=+'
    }

    let pass=""
    for(let i=0;i<length;i++){
      pass+=str[Math.floor(Math.random()*str.length)];
    }
    setpassword(pass);
  }


  useEffect(function(){
    generatePaasword();
  },[length,numberChanged,charChanged])

  return (
    <>
      <h1>Password is : {password}</h1>

      <div className="grp-btn">
        {/* Range bar for increasing and decreasing the length f the password */}
        <input type="range" min={5} max={50} value={length} onChange={function (event) {
          setlength(event.target.value);
        }}></input>
        <label>Length is :{length} </label>

        <input type="checkbox" onChange={() => setnumberchanged(!numberChanged)}></input>
        <label>Number</label>


        <input type="checkbox" onChange={() => setcharchanged(!charChanged)}></input>
        <label>Charecter</label>

      </div>
    </>
  )
}

export default App