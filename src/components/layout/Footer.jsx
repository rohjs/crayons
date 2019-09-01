import React from 'react'
import { ReactComponent as FooterLogo } from '../../assets/images/img-logo.svg'
import '../../styles/Footer.css'

const Footer = props => (
  <footer className="footer">
    <h1 className="footer__logo">
      <FooterLogo alt="Crayons" />
    </h1>
  </footer>
)

export default Footer
