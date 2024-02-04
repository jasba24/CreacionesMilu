import React from 'react'
import '../components/styles/product.css'
import { useLocation } from 'react-router-dom'
import Calzado from '../assets/1.jpg'
import Bolsos from '../assets/bolso.jpeg'
import Billeteras from '../assets/billeteta.jpeg'
import Fragancias from '../assets/falsaLocion.jpeg'

function Product() {
  let location = useLocation()
  let route = location.pathname.split('/')[2]
  let routeImages = {
    Calzado: Calzado,
    Bolsos: Bolsos,
    Billeteras: Billeteras,
    Fragancias: Fragancias,
  }
  return (
    <main>
      <div>
        <img src={routeImages[route]} alt="" />
      </div>
      <div className="buy-content">
        <h1>Calzado en cuero</h1>
        <h3>
          Valor: <spam></spam> $ 80.000
        </h3>
        <h3>Tallas</h3>
        <div className="size-container">
          <spam>38</spam>
          <spam>38</spam>
          <spam>38</spam>
        </div>
        <a href="carrito">Agregar al Carrito</a>
      </div>
    </main>
  )
}

export default Product
