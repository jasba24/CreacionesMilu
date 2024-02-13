import React from 'react'
import { useLocation } from 'react-router-dom'
import Mocasines from '../assets/1.jpg'
import Baletas from '../assets/bolso.jpeg'
import Sandalias from '../assets/billeteta.jpeg'
import Deportivos from '../assets/falsaLocion.jpeg'
import Plataformas from "../assets/2.webp"

function ShoesList() {
  let location = useLocation()
  let route = location.pathname.split('/')[2]
  let routeImages = {
    Mocasines: Mocasines,
    Baletas: Baletas,
    Sandalias: Sandalias,
    Deportivos: Deportivos,
    Plataformas: Plataformas
  }

  return (
    <main>
      <div>
        <img src={routeImages[route]} alt="" />
      </div>
      <div className="buy-content">
        <h1>Calzado en cuero</h1>
        <h1>Valor: $ 80.000</h1>
        <h1>Tallas</h1>
        <div className="size-container">
          <h1>38 38 38</h1>
        </div>
        <a href="carrito">Agregar al Carrito</a>
      </div>
    </main>
  )
}

export default ShoesList
