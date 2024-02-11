import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/header'
import Home from './pages/home'
import Product from './pages/product'
import Login from './pages/login'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route
            exact
            path="/product/:category/:pageId"
            Component={Product}
          ></Route>
          <Route exact path="/login" Component={Login}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
