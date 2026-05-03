import React from 'react'
import { Logo } from '../Components/Logo/Logo'
import { Outlet } from 'react-router'
import login from '../assets/authImage.png'

export const Authlayout = () => {
  return (
    <div className='max-w-7xl mx-auto'>
        <Logo></Logo>
        <div className='flex items-center'>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <div className='flex-1'>
                <img src={login} alt=""/>
            </div>
        </div>
    </div>
  )
}
