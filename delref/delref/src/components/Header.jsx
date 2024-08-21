import React from 'react';
import Logo from '../assets/LogoEmpresa.png';
import '../styles/Header.css';
import {Link} from "react-scroll"

export const Header = () => {

  return (
    <>
    <body className='Header'>
        <img className='logo' src={Logo} alt="" /> 
        <div className='selection'>
            <Link to="Home" smooth={true} duration={500}>
            Home
            </Link>
            <Link to="About" smooth={true} duration={500}>
             Sobre nosotros
            </Link>
            <Link to="Services" smooth={true} duration={500}>
            Servicios
            </Link>
            <Link to="Projects" smooth={true} duration={500}>
              Proyectos
            </Link>
        </div>
    </body>
    </>
  )
}
