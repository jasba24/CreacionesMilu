// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

import shoppingCart from '../assets/shoppingCart.png'
import menu from '../assets/menu.png'
import './styles/header.css'
import UserFormLogin from './userFormLogin'
import { Link } from 'react-router-dom'

function Header() {
  const [showForm, setShowForm] = useState(false)
  return (
    <header>
      <Link to={'/'} className="start">
        Marroquineria en cuero de alta calidad
      </Link>
      <nav>
        <img
          onClick={() => setShowForm(!showForm)}
          className="store-icon"
          src={menu}
          alt="logo de tienda"
        />
        <img className="shoe-icon" src={shoppingCart} alt="logo mercancia" />
      </nav>
      {showForm && <UserFormLogin></UserFormLogin>}
    </header>
  )
}

export default Header
