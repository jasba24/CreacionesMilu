import React from 'react'
import '../components/styles/product.css'
import CatalogList from '../components/CatalogList'
import { Link } from 'react-router-dom'

function Catalog() {
  return (
    <main>
      <div className="product-image">
        <Link to={'/Bolsos'}>Volver</Link>
      </div>
      <div className="imgs">
        <CatalogList></CatalogList>
      </div>
    </main>
  )
}

export default Catalog
