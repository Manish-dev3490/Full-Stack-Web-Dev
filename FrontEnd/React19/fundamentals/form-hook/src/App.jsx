import React from 'react'
import { useRef } from 'react';

function App() {
        const nameRef=useRef(null);
        const ageRef=useRef(null);
        const passwordRef=useRef(null);


    function handleSubmit(e) {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(ageRef.current.value);
        console.log(passwordRef.current.value);
    }

    console.log("comonent is rendered");


    return (
        <>
            <form style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "200px", backgroundColor: "lavender" }} onSubmit={handleSubmit}>
                <input ref={nameRef} type='text' placeholder='enteer your name' />
                <input ref={ageRef} type='number' placeholder='enteer your age' />
                <input  ref={passwordRef} type='password' placeholder='enteer your paasword' />
                <button type='submit'>Submit</button>

            </form>
        </>
    )
}

export default App