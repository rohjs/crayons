import React from 'react'
import '../../styles/Header.css'

const Header = ({ title }) => (
  <header className='app__header'>
    <h1 className='app__title'>
      {
        title
        ? title
        : 'Untitled Styleguide'
      }
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