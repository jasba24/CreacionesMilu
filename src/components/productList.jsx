import React from 'react'
import Product from './product'

function ProductList(props) {
  // eslint-disable-next-line react/prop-types
  const { sectionName, productName, productImage } = props
  return (
    <section id={sectionName}>
      <h1>{sectionName}</h1>
      <div className="section-container">
        <Product id={`${sectionName}/1`} image={productImage} name={productName ?? sectionName}></Product>
        <Product id={`${sectionName}/2`} image={productImage} name={productName ?? sectionName}></Product>
        <Product id={`${sectionName}/3`} image={productImage} name={productName ?? sectionName}></Product>
        <Product id={`${sectionName}/4`} image={productImage} name={productName ?? sectionName}></Product>
        <Product id={`${sectionName}/5`} image={productImage} name={productName ?? sectionName}></Product> 
      </div>
    </section>
  )
}

export default ProductList
