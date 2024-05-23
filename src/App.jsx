import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import shoes from './pages/shoes'
import Category from './pages/category'
import Shooping from './pages/shopping'
// import { useState } from 'react'

function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" Component={Home}></Route>
            <Route exact path="/:category/:pageId" Component={shoes}></Route>
            <Route exact path="/category" Component={Category}></Route>
            <Route exact path="/products" Component={Shooping}></Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
