import React from 'react'
import '../components/styles/home.css'
import Categories from '../components/categories'
import CategoryList from '../components/categoryList'
import zapato from '../assets/zapato2.jpeg'
import bolso from '../assets/bolso.jpeg'
import billetera from '../assets/billetera.jpeg'
import falsaLocion from '../assets/falsaLocion.jpeg'
import Hero from '../components/hero'

function Home() {
  const categories = [
    ['Calzado', zapato, '#shoes', 'shoes'],
    ['Bolsos', bolso, '#bag', 'bag'],
    ['Otros', billetera, '#purse', 'purse']
  ]
  const productCategories = [
    [
      'Bolicheros',
      'Deportivos',
      'Mocasines',
      'Plataformas',
      'Sandalias',
      'Suecos',
      'Tacones'
    ],
    ['Manos Libres', 'Carriel', 'Tulas', 'Bolsos de Mano', "Mochila Wayuu", "Morral de Tela"],
    ['Billeteras', 'Correas Mujer', 'Correas Hombre', 'Lociones']
  ]

  return (
    <>
      <Hero></Hero>
      <h1>Categorías</h1>
      <section className="image-container">
        {categories.map((v, i) => {
          return (
            <Categories
              key={i}
              categoryName={v[0]}
              categoryLogo={v[1]}
              categoryLink={v[2]}
            />
          )
        })}
      </section>
      {categories.map((v, i) => {
        return (
          <CategoryList
            key={i}
            sectionName={v[0]}
            productImage={v[1]}
            categoryLink={v[3]}
            productName={productCategories[i]}
          />
        )
      })}
    </>
  )
}
export default Home
