// eslint-disable-next-line no-unused-vars
import React from 'react'

import logo from '../assets/logo.png'
import "./styles/header.css"

function Header() {
  return (
    <header>
      <nav>
        <img className="logo-icon" src={logo} alt="logo de tienda" />
      </nav>
    </header>
  )
}


export default Header