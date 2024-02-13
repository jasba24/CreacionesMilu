import React from 'react'
import '../components/styles/home.css'
import Categories from '../components/categories'
import CategoryList from '../components/categoryList'
import zapato from '../assets/zapato2.jpeg'
import bolso from '../assets/bolso.jpeg'
import billeteta from '../assets/billeteta.jpeg'
import falsaLocion from '../assets/falsaLocion.jpeg'
import Hero from '../components/hero'

function Home() {
  const shoes = [
    'Mocasines',
    'Baletas',
    'Sandalias',
    'Deportivos',
    'Plataformas'
  ]
  const bag = ['Elegantes', 'Deportivos', 'Artesanales', 'Bolsos de Mano']

  return (
    <>
      <Hero></Hero>
      <h1>Categorías</h1>
      <section className="image-container">
        <Categories
          categoryLink="#shoes"
          categoryLogo={zapato}
          categoryName="Calzado"
        />
        <Categories
          categoryLink="#bag"
          categoryLogo={bolso}
          categoryName="Bolsos"
        />
        <Categories
          categoryLink="#purse"
          categoryLogo={billeteta}
          categoryName="Billeteras"
        />
        <Categories
          categoryLink="#lotion"
          categoryLogo={falsaLocion}
          categoryName="Fragancias"
        />
      </section>
      <CategoryList
        categoryLink="shoes"
        sectionName="Calzado"
        productName={shoes}
        productImage={zapato}
      ></CategoryList>
      <CategoryList
        categoryLink="bag"
        sectionName="Bolsos"
        productName={bag}
        productImage={bolso}
      ></CategoryList>
      <CategoryList
        categoryLink="purse"
        sectionName="Billeteras"
        productName={bag}
        productImage={billeteta}
      ></CategoryList>
      <CategoryList
        categoryLink="lotion"
        sectionName="Fragancias"
        productName={bag}
        productImage={falsaLocion}
      ></CategoryList>
    </>
  )
}
export default Home
