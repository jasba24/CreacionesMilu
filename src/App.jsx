import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Shoes from './pages/shoes'
import Category from './pages/category'
import Shooping from './pages/shopping'
import Catalog from './pages/catalog';

function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" Component={Home}></Route>
            <Route exact path="/:category/" Component={Shoes}></Route>
            <Route exact path="/:category/:pageId/" Component={Catalog}></Route>
            <Route exact path="/category" Component={Category}></Route>
            <Route exact path="/products" Component={Shooping}></Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
