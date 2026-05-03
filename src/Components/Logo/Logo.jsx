import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router'
export const Logo = () => {
  return (
    <Link to='/' className='flex items-end'>
      <div className='flex items-end'>
        <img src={logo} alt="logo" className='' />
        <h3 class="text-3xl font-bold -ms-2.5">zapShift</h3>
    </div>
    </Link>
  )
}
