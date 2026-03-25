import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import { useState } from 'react';
import LoginForm from './LoginForm'

function App() {
  const userresponse = localStorage.getItem("user");
  const userData = userresponse ? JSON.parse(userresponse) : null;
  const currentUser=localStorage.getItem("currentUser");
  const userName=currentUser?JSON.parse(currentUser):null
  const [isUser, setisUser] = useState(userData);
  console.log(userName);
  


  return (
     <div className='app-component'>
      <Header />
      <Body />
      <Footer />
    </div> 
  )
}

export default App