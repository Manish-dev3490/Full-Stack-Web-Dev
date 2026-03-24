
import { useState } from 'react';
import { createRoot } from 'react-dom/client'
import SignUpForm from './SignUpForm';
import { useRef } from 'react';
function LoginForm() {
    const [isAccount, setIsAccount] = useState(false);
    const email = useRef();
    const password = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(email);
        console.log(password);


    }

    return (
        <div className='Loginform-component'>
            {isAccount ? <SignUpForm accountInfo={isAccount} accountFun={setIsAccount} /> : <>  <h2>Login Form  </h2>
                <form className='form-box' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='first'>Email :</label>
                        <input ref={email} type='email' placeholder='enter your email' />
                    </div>

                    <div>
                        <label htmlFor='first'>Password :</label>
                        <input ref={password} type='password' placeholder='enter your password' />
                    </div>

                    <button type='submit'>Login</button>
                    <button onClick={() => {
                        setIsAccount(true);
                    }}>Sign up if you don't have account</button>

                </form></>}
        </div>
    )
}



createRoot(document.getElementById('root')).render(

    <LoginForm />
)

export default LoginForm;