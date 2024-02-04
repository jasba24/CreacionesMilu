import React from 'react'
import '../components/styles/home.css'
import Categories from '../components/categories'
import ProductList from '../components/productList'
import zapato from '../assets/1.jpg'
import bolso from '../assets/bolso.jpeg'
import billeteta from '../assets/billeteta.jpeg'
import falsaLocion from '../assets/falsaLocion.jpeg'
import Hero from '../components/hero'

function Home() {
  return (
    <>
      <Hero></Hero>
      <h1>Categories</h1>
      <section className="image-container">
        <Categories categoryLogo={zapato} categoryName="Calzado" />
        <Categories categoryLogo={bolso} categoryName="Bolsos" />
        <Categories categoryLogo={billeteta} categoryName="Billeteras" />
        <Categories categoryLogo={falsaLocion} categoryName="Fragancias" />
      </section>
      <ProductList
        sectionName="Calzado"
        productName="Sandalia en Cuero"
        productImage={zapato}
      ></ProductList>
      <ProductList sectionName="Bolsos" productImage={bolso}></ProductList>
      <ProductList
        sectionName="Billeteras"
        productImage={billeteta}
      ></ProductList>
      <ProductList
        sectionName="Fragancias"
        productImage={falsaLocion}
      ></ProductList>
    </>
  )
}
export default Home
