import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import { useState } from 'react';
import LoginForm from './LoginForm'

function App() {
  const userresponse = localStorage.getItem("user");
  const userData = userresponse ? JSON.parse(userresponse) : null;

  const [isUser, setisUser] = useState(userData);


  return (
    isUser ? <div className='app-component'>
      <Header />
      <Body />
      <Footer />
    </div> : <LoginForm />
  )
}

export default App