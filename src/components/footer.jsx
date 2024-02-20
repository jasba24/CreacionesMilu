// eslint-disable-next-line no-unused-vars
import React from 'react'
import './styles/footer.css'

import logo from '../assets/logo.png'
import whatsapp from '../assets/whatsapp.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'

function Footer() {
  return (
    <div className="footer">
      <img className="logo" src={logo} alt="logo" />
      <span>Creaciones Milú Shoes</span>
      <div>
        <a href="https://wa.link/wg8v7o" target="_blank">
          <img src={whatsapp} alt="whatsapp-icon" />
          <span> +57 315 437 9739 </span>
        </a>
        <a href="https://www.facebook.com/lucelly.bedoyagarzon" target="_blank">
          <img src={facebook} alt="facebook-icon" />
        </a>
        <a
          href="https://www.instagram.com/creacionesmilushoes/"
          target="_blank"
        >
          <img src={instagram} alt="instagram-icon" />
        </a>
      </div>
    </div>
  )
}

export default Footer
