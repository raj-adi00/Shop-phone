import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faRotateLeft, faRotateRight } from '@fortawesome/free-solid-svg-icons'
import WelcomePage from './Components/WelcomePage'
import UserContextProvider from './Context/UserContextProvider'
import { Outlet } from 'react-router-dom'
import Product from './Components/Product'
function App() {


  return (
    <UserContextProvider>
      <Outlet/>
    </UserContextProvider>
  )
}

export default App
