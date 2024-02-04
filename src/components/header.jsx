// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

import shoppingCart from '../assets/shoppingCart.png'
import user from '../assets/user.png'
import menu from '../assets/menu.png'
import './styles/header.css'
import UserFormLogin from './userFormLogin'

function Header() {
  const [showForm, setShowForm] = useState(false)
  return (
    <header>
      <h1>Marroquineria en cuero de alta calidad</h1>
      <nav>
        <button onClick={() => setShowForm(true)}>
          <img className="user-icon" src={user} alt="logo de usuario" />
        </button>
        <button>
          <img className="store-icon" src={menu} alt="logo de tienda" />
        </button>
        <button>
          <img className="shoe-icon" src={shoppingCart} alt="logo mercancia" />
        </button>
      </nav>
      {showForm && <UserFormLogin></UserFormLogin>}
    </header>
  )
}

export default Header
