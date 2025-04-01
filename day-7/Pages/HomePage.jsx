import React from 'react'
import { useState } from 'react'
import NavBar from './../comps/navBar';
import MainBody from '../comps/mainBody';

const HomePage = () => {
    const [userStatus, setUserStatus] = useState(false)
  return (
    <>
      <NavBar userStatus={userStatus} handelUser={setUserStatus}/>
      <MainBody userStatus={userStatus} handelUser={setUserStatus}/>
    </>
  )
}

export default HomePage
