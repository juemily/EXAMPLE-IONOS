import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({children}) {
  return (
    <div className='layout'>
      <Head className="header">
        <title>Lamparas Padilla</title>
      </Head>
      <header>
        <div className="container">
          <Navbar />
        </div>
      </header>
      <main className='app__content container'>
        {children}
      </main>
      <footer>
        <Footer/> 
      </footer>
    </div>
  )
}

export default Layout