import React from 'react'
import Product from './product'

function ProductList(props) {
  // eslint-disable-next-line react/prop-types
  const { sectionName, productName, productImage } = props
  return (
    <section id={sectionName}>
      <h1>{sectionName}</h1>
      <div className="section-container">
        <Product image={productImage} name={productName ?? sectionName}></Product>
        <Product image={productImage} name={productName ?? sectionName}></Product>
        <Product image={productImage} name={productName ?? sectionName}></Product>
        <Product image={productImage} name={productName ?? sectionName}></Product>
        <Product image={productImage} name={productName ?? sectionName}></Product> 
      </div>
    </section>
  )
}

export default ProductList
