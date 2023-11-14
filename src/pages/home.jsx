import React from 'react'
import Categories from '../components/categories'
import ProductList from '../components/productList'
import productLogo from '../assets/2.webp'

function Home() {
  return (
    <>
      <h1>Categories</h1>
      <section className="image-container">
        <Categories categoryName="Calzado" />
        <Categories categoryName="Bolsos" />
        <Categories categoryName="Billeteras" />
        <Categories categoryName="Fragancias" />
      </section>
      <ProductList
        sectionName="Calzado"
        productName="Sandalia en Cuero"
        productImage={productLogo}
      ></ProductList>
      <ProductList
        sectionName="Bolsos"
        productImage={productLogo}
      ></ProductList>
      <ProductList
        sectionName="Billeteras"
        productImage={productLogo}
      ></ProductList>
      <ProductList
        sectionName="Fragancias"
        productImage={productLogo}
      ></ProductList>
    </>
  )
}
export default Home
