import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/header'
import Home from './pages/home'
import Product from './pages/product'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/product/:pageId" Component={Product}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
