import React from 'react'
import './styles/shoesList.css'

import { useLocation } from 'react-router-dom'
import Bolicheros from './shoesList/bolicheros'
import Tacon from './shoesList/tacon'

function ShoesList() {
  let location = useLocation()
  let route = location.pathname.split('/')[1]
  let routeImages = {
    Bolicheros: <Bolicheros></Bolicheros>,
    Tacones: <Tacon></Tacon>
  }

  return (
    <main>
      <div className="imgs">{routeImages[route]}</div>
    </main>
  )
}

export default ShoesList
