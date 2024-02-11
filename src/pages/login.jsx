import React from 'react'

import '../components/styles/login.css'

function Login() {
  return (
    <form className='login_form'>
      <label htmlFor="name">Nombre Completo</label>
      <input type="text" id="name" />
      <label htmlFor="mail">Correo Electronico</label>
      <input type="text" id="mail" />
      <label htmlFor="password">Contraseña</label>
      <input type="password" id="password" />
      <label htmlFor="pass">Repetir contraseña</label>
      <input type="password" id="pass" />
      <label htmlFor="phone">Celular</label>
      <input type="tel" id="phone" />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default Login
