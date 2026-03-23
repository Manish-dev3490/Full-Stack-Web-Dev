
import { createRoot } from 'react-dom/client'

function LoginForm() {
    return (
        <div className='Loginform-component'>
            <h2>Login Form - Enter your credentials if you have an account </h2>
            <form className='form-box' onSubmit={(e)=>e.preventDefault()}>
                <div>
                    <label htmlFor='first'>Email :</label>
                    <input type='email' />
                </div>

                <div>
                    <label htmlFor='first'>Password :</label>
                    <input type='password' />
                </div>

                <button type='submit'>Login</button>
                <button>Sign up if you don't have account</button>

            </form>
        </div>
    )
}



createRoot(document.getElementById('root')).render(

    <LoginForm />
)

export default LoginForm;