import React from 'react'


import './styles/categories.css'

function Categories(props) {
  // eslint-disable-next-line react/prop-types
  const { categoryName, categoryLogo } = props
  return (
    <a className="category-link" href="#first">
      <img src={categoryLogo} alt="Logo de la categoria" />
      <h2>{categoryName}</h2>
    </a>
  )
}

export default Categories
