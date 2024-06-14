import React from 'react'
import '../components/styles/home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="hero-container" />
      <h1>Bienvenidos </h1>
      <Link to={'/category/1'}>
        <h1>Ver catalogo 1</h1>
      </Link>
      <Link to={'/category '}>
        <h1>Ver catalogo 2</h1>
      </Link>
    </>
  )
}
export default Home
