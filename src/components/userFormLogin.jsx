import React from 'react'

import "./styles/userFormLogin.css"

function UserFormLogin() {
  return (
    <form className='menu'>
      <label htmlFor="name">Nombre Completo</label>
      <input className='menu_input' type="text" id="name" />
      <label htmlFor="mail">Correo Electronico</label>
      <input className='menu_input' type="text" id="mail" />
      <label htmlFor="password">Contraseña</label>
      <input className='menu_input' type="password" id="password" />
      <label htmlFor="pass">Repetir contraseña</label>
      <input className='menu_input' type="password" id="pass" />
      <label htmlFor="phone">Celular</label>
      <input className='menu_input' type="tel" id="phone" />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default UserFormLogin
