import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../../styles/AppLayout.css'

const AppLayout = (props) => (
  <div className='app'>
    <Header title={props.styleguideTitle} />
    <main className='app__main'>
      <div className='app__wrap'>
        { props.children }
      </div>
    </main>
    <Footer />
  </div>
)

export default AppLayout