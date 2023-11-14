import React from 'react'
import '../components/styles/product.css'
import productlogo from "../assets/2.webp"

function Product() {
  return (
    <main>
      <div>
        <img src={productlogo} alt="" />
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
