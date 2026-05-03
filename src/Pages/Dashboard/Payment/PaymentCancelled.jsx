import React from 'react'
import { Link } from 'react-router'

export const PaymentCancelled = () => {
  return (
    <div className='flex flex-col gap-4.5 items-center justify-center h-screen'>
        <h1 className='text-4xl font-bold text-red-500 '>Payment Cancelled</h1>
        <Link to='/dashboard/my-parcels'>
            <button className='btn btn-primary text-black'>
                View My Parcels
            </button>
        </Link>
    </div>
  )
}
