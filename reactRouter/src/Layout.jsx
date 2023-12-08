import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header/>
      {/* outlet means header and footer contain will be same but middle part will be change */}
      <Outlet/>  
      <Footer/>
    </>
  )
}

export default Layout
