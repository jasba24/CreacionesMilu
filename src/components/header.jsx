// eslint-disable-next-line no-unused-vars
import React from 'react'

import shoppingCart from '../assets/shoppingCart.png'
import user from "../assets/user.png"
import menu from '../assets/menu.png'
import './styles/header.css'

function Header() {
  return (
    <header>
      <nav>
        <h1>Marroquineria en cuero de alta calidad</h1>
        <img className="user-icon" src={user} alt="logo de usuario" />
        <img className="store-icon" src={menu} alt="logo de tienda" />
        <img className="shoe-icon" src={shoppingCart} alt="logo mercancia" />
      </nav>
    </header>
  )
}

export default Header
