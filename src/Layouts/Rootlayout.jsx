import React from 'react'
import { Outlet } from 'react-router'
import { Footer } from '../Pages/Shared/Footer/Footer'
import { Navbar } from '../Pages/Shared/Navbar/Navbar'

export const Rootlayout = () => {
  return (
    <div className='max-w-7xl mx-auto container'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
