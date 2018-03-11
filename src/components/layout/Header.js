import React from 'react'
import '../../styles/Header.css'

const Header = (props) => (
  <header className='app__header'>
    <h1 className='app__title'>
      Name of the styleguide
    </h1>

    <button
      className='btn--share'
      type='button'
    >
      Share
    </button>
  </header>
)

export default Header