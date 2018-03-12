import React from 'react'
import Header from './Header'
import '../../styles/AppLayout.css'

const AppLayout = (props) => (
  <div className='app'>
    <Header />
    <main className='app__main'>
      <div className='app__wrap'>
        { props.children }
      </div>
    </main>
  </div>
)

export default AppLayout