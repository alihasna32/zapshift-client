import React from 'react'
import truck from '../../../assets/bookingIcon.png'
export const HowItWork = () => {
  return (
    <div className='my-7'>
    <h1 className='mb-3.5 text-4xl font-extrabold'>How it works</h1>
        <div className='flex max-md:flex-wrap gap-3.5'>
        <div className='flex flex-col items-start gap-2 bg-white p-5 rounded-lg'>
            <img src={truck} alt=""/>
            <h1 className='text-xl font-bold'>Booking Pick & Drop</h1>
            <p>From personal packages to business shipments — we deliver on time, every time.</p>
        </div>
        <div className='flex flex-col items-start gap-2 bg-white p-5 rounded-lg'>
            <img src={truck} alt=""/>
            <h1 className='text-xl font-bold'>Cash On Delivery</h1>
            <p>From personal packages to business shipments — we deliver on time, every time.</p>
        </div>
        <div className='flex flex-col items-start gap-2 bg-white p-5 rounded-lg'>
            <img src={truck} alt=""/>
            <h1 className='text-xl font-bold'>Delivery Hub</h1>
            <p>From personal packages to business shipments — we deliver on time, every time.</p>
        </div>
        <div className='flex flex-col items-start gap-2 bg-white p-5 rounded-lg'>
            <img src={truck} alt=""/>
            <h1 className='text-xl font-bold'>Booking SME & Corporate</h1>
            <p>From personal packages to business shipments — we deliver on time, every time.</p>
        </div>
    </div>
    </div>
  )
}
