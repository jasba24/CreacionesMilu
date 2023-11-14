import React from 'react'

function Product(props) {
  // eslint-disable-next-line react/prop-types
  const { image, name } = props
  return (
    <a href="/product" >
      <img src={image} alt="referencia del producto" />
      <h2>{name}</h2>
      <button className="buy-button">comprar</button>
    </a>
  )
}

export default Product
