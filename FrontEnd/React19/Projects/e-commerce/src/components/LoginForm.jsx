
import { useState } from 'react';
import { createRoot } from 'react-dom/client'
import SignUpForm from './SignUpForm';
function LoginForm() {
    const [isAccount, setIsAccount] = useState(false);
    
    return (
        <div className='Loginform-component'>
            {isAccount ? <SignUpForm accountInfo={isAccount} accountFun={setIsAccount} /> : <>(  <h2>Login Form - Enter your credentials if you have an account </h2>
                <form className='form-box' onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label htmlFor='first'>Email :</label>
                        <input type='email' />
                    </div>

                    <div>
                        <label htmlFor='first'>Password :</label>
                        <input type='password' />
                    </div>

                    <button type='submit'>Login</button>
                    <button onClick={()=>{
                        setIsAccount(true);
                    }}>Sign up if you don't have account</button>

                </form>)</>}
        </div>
    )
}



createRoot(document.getElementById('root')).render(

    <LoginForm />
)

export default LoginForm;