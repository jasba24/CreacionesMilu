import './App.css'

import Header from './components/header'
import Categories from './components/categories'

function App() {
  return (
    <>
      <Header />
      <h1>Categories</h1>
      <section className="image-container">
        <Categories categoryName="Calzado" />
        <Categories categoryName="Bolsos" />
        <Categories categoryName="Billeteras" />
        <Categories categoryName="Fragancias" />
      </section>
    </>
  )
}

export default App
