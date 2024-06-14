import logo from '../assets/logo.png'
import './styles/header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <Link to={'/'} className="start">
        <img className="logo-icon" src={logo} alt="" />
      </Link>
      <h1>
        Marroquineria en cuero de alta calidad <br /> 
        directamente traido de bucaramanga
      </h1>
    </header>
  )
}

export default Header
