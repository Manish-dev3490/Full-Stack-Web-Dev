import React from 'react'
import { useState } from 'react'
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import ReactDOM from 'react-dom/client'

function AuthPage() {
  const [loginInfo, setLoginInfo] = useState(false);

  return (
    <div>
      {
        loginInfo ?<LoginPage loginInfo={loginInfo} setLoginInfo={setLoginInfo} />:<SignupPage loginInfo={loginInfo} setLoginInfo={setLoginInfo} />
      }
    </div>
  )
}


export default AuthPage