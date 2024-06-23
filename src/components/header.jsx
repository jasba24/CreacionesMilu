import logo from '../assets/logo.png'
import './styles/header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <Link to={'/'} className="start">
      <h1 className='red-title'>
        Marroquineria en cuero de alta calidad <br />
        directamente de fábrica
      </h1>
      </Link>
      
    </header>
  )
}

export default Header
