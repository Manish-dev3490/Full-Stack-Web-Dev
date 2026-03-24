import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

function SignUpForm(props) {
    const { accountFun } = props;
    const email = useRef();
    const password = useRef();
    const name = useRef();
    const phone = useRef();
    const [error, setErrors] = useState(null);

            console.log(error);

    function validatename(name) {
        if (name.length < 3) return "Name must be at least 3 characters";
        if (name.length > 20) return "Name must be max 20 characters";
        return "";
    }

    function validateemail(email) {
        if (email.length < 12) return "Email must be at least 12 characters";
        if (email.length > 40) return "Email too long";
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) return "Invalid email format";

        return "";
    }


    function validatephone(phone) {
        if (phone.length !== 10) return "Phone must be 10 digits";
        return "";

    }

    function validatepassword(password) {
        if (password.length < 6) return "Password must be at least 6 characters";
        if (password.length > 20) return "Password too long";
        return "";

    }


    function handleSubmit(e) {
        e.preventDefault();
        const nameval = name.current.value;
        const emailval = email.current.value;
        const phoneval = phone.current.value;
        const passwordval = password.current.value;

        if(nameval.length==0 && emailval.length==0 && phoneval.length==0 && passwordval.length==0){
            window.alert("please fill the form first");
            return;
        }

        const nameerror = validatename(nameval);
        const emailerror = validateemail(emailval);
        const passworderror = validatepassword(passwordval);
        const phoneerror = validatephone(phoneval);

   



        if (nameerror || emailerror || passworderror || phoneerror) {
            const error = { nameerror, emailerror, passworderror, phoneerror };
            
            setErrors(error);
        }
        else setErrors(null);
    }


    return (
        <>
            <h2>Sign up Form </h2>
            <form className='form-box' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='first'>Name :</label>
                    <input  id='first' ref={name} type='text' placeholder='enter your name' />
                    {error ? <p>{error.nameerror}</p> : ""}
                </div>

                <div>
                    <label htmlFor='second'>Phone Number :</label>
                    <input id='second' ref={phone} type='number' placeholder='enter your number' />
                      {error ? <p>{error.phoneerror}</p> : ""}
                </div>

                <div>
                    <label htmlFor='third'>Email :</label>
                    <input ref={email} type='email' id='third' placeholder='enter your email' />
                      {error ? <p>{error.emailerror}</p> : ""}
                </div>

                <div>
                    <label htmlFor='fourth'>Password :</label>
                    <input id='fourth' ref={password} type='password' placeholder='enter your password' />
                      {error ? <p>{error.passworderror}</p>: ""}
                </div>

                <button type='submit'>Login</button>
                <button onClick={() => accountFun(false)}>Login if you have your account</button>

            </form>
        </>
    )
}

export default SignUpForm