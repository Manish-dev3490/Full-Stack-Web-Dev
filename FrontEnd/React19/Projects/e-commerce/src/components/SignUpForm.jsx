import React from 'react'

function SignUpForm(props) {
    console.log(props);
    const {accountFun}=props;
  return (
    <>
    <h2>Sign up Form - Enter your credentials and create your account </h2>
                <form className='form-box' onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label htmlFor='first'>Name :</label>
                        <input type='text' placeholder='enter your name' />
                    </div>

                    <div>
                        <label htmlFor='second'>Phone Number :</label>
                        <input type='number'  placeholder='enter your number'/>
                    </div>

                     <div>
                        <label htmlFor='third'>Email :</label>
                        <input type='email'  placeholder='enter your email'/>
                    </div>

                    <div>
                        <label htmlFor='fourth'>Password :</label>
                        <input type='password'  placeholder='enter your password'/>
                    </div>

                    <button type='submit'>Login</button>
                    <button onClick={()=>accountFun(false)}>Login if you have your account</button>

                </form>
    </>
  )
}

export default SignUpForm