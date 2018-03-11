import React from 'react'
import Header from './Header'
import '../../styles/AppLayout.css'

const AppLayout = (props) => (
  <div className='app'>
    <Header />
    <main className='app__main'>
      { props.children }
    </main>
  </div>
)

export default AppLayout