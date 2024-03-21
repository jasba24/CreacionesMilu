import React, { useContext } from 'react'

import '../components/styles/shopping.css'
import ProductContext from './../context/productContext'

// const contextProduct = useContext(ProductContext)

function Shooping() {
  const imgs = []
  for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.length)
    imgs.push(localStorage.getItem(i))
  }

  return (
    <div>
      <h1>Tus productos son los siguientes:</h1>
      <div className="section-container">
        {imgs.map((img, i) => {
          return <img className="shopping-img" key={i} src={img} alt="" />
        })}
      </div>
    </div>
  )
}

export default Shooping
