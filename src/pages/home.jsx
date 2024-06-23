import React from 'react'
import '../components/styles/home.css'
import { Link } from 'react-router-dom'
import logo1 from '../assets/heroimage.png'
import logo2 from '../assets/1.jpg'
import donacion from '../assets/heroImage2.png'

function Home() {
  return (
    <>
      <div className=""></div>
      <h1 className="title">
        Estimada clientela, por cada producto que nos compres, Variedades Milú
        Shoes donará $10.000 a la Fundación Hogar El Anciano Abandonado
        <br />
        <a className='yellow-link' target='_blank' href="https://www.facebook.com/lucelly.bedoyagarzon/posts/pfbid0ST2UxCx6SY3dNkGhvDTJNwUc3T1iJkQDyY1hDV46soMUifJyevN9RMDcDHvLyj8Ml">
          Ver donaciones
        </a>
      </h1>
      <div className="hero-container" src={donacion} alt="" />
      <br />
      <h1 className='red-title'>Catalogos disponibles </h1>
      <div className="catalog-container">
        <Link to={'/category/1'}>
          <img src={logo1} alt="" />
          <h1 className='yellow-link'>Ver catalogo 1</h1>
        </Link>
        <Link to={'/category/2'}>
          <img src={logo1} alt="" />
          <h1 className='yellow-link'>Ver catalogo 2</h1>
        </Link>
      </div>
    </>
  )
}
export default Home
