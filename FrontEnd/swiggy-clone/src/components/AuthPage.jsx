import React from 'react'
import { useState } from 'react'
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import ReactDOM from 'react-dom/client'
import App from '../App';

function AuthPage() {
  const [loginInfo, setLoginInfo] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    isLoggedIn ? <App /> :
      <div>
        {
          loginInfo ? <LoginPage loginInfo={loginInfo} setLoginInfo={setLoginInfo} setLoggedIn={setLoggedIn} /> : <SignupPage loginInfo={loginInfo} setLoginInfo={setLoginInfo} setLoggedIn={setLoggedIn} />
        }
      </div>

  )
}


export default AuthPage