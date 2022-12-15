import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import HomePage from '../pages/HomePage'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import Navbar from '../components/Navbar'
import NavbarLogin from '../components/NavbarLogin'

function Paths() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </Router>
  )
}

export default Paths
