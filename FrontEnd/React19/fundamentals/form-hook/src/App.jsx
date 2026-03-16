import React from 'react'
import { useState } from 'react'

function App() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [password, setPasword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name);
        console.log(age);
        console.log(password);
    }

    console.log("comonent is rendered");


    return (
        <>
            <form style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "200px", backgroundColor: "lavender" }} onSubmit={handleSubmit}>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name'></input>
                <input type='number' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Enter your age'></input>
                <input type='password' value={password} onChange={(e) => setPasword(e.target.value)} placeholder='Enter your password'></input>
                <button type='submit'>Submit</button>

            </form>
        </>
    )
}

export default App