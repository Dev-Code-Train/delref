import React from 'react';
import '../styles/Footer.css';
import { FaInstagram } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";

export const Footer = () => {
  return (

    <div className='footer'>
    <a href="https://wa.me/34691438254?text=Hola,%20me%20interesan%20sus%20servicios!" smooth={true} duration={500}>
    <SiWhatsapp />
    </a>
    <a  href="mailto:refartsev@gmail.com?" smooth={true} duration={500}>
    Refartsev@gmail.com
    </a>
    <a href="https://www.instagram.com/reformas_y_aplicados_arcodelta/" smooth={true} duration={500}>
    <FaInstagram />
    </a>
</div>
  )
}
