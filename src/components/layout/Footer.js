import React from 'react'
import * as FooterLogo from '../../assets/images/img-logo.svg' 
import '../../styles/Footer.css'

const Footer = () => (
  <footer className='footer'>
    <h1 className='footer__logo'>
      <img
        src={FooterLogo}
        alt='Crayons'
      />
    </h1>
  </footer>
)

export default Footer