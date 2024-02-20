import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/header'
import Home from './pages/home'
import shoes from './pages/shoes'
import Login from './pages/login'
import Category from './pages/category'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/:category/:pageId" Component={shoes}></Route>
          <Route exact path="/category" Component={Category}></Route>
          <Route exact path="/login" Component={Login}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
