import React from 'react'

import categoryLogo from '../assets/1.jpg'
import './styles/categories.css'

function Categories(props) {
  // eslint-disable-next-line react/prop-types
  const { categoryName } = props
  return (
    <a href="#first">
      <img src={categoryLogo} alt="Logo de la categoria" />
      <h2>{categoryName}</h2>
    </a>
  )
}

export default Categories
