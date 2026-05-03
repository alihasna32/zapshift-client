import React from 'react'
import service from "../../../assets/service.png"
const OurServices = () => {
  return (
    <div className='p-14 bg-secondary rounded-2xl text-center my-[60px]'>
        <h1 className='text-4xl font-bold text-white'>Our Services</h1>
        <p className='text-white my-6'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5.5'>
            <div className='p-3 bg-white rounded-2xl flex flex-col items-center hover:bg-primary'>
                <img src={service} alt=""/>
                <h1 className='py-2.5 text-2xl font-bold'>Express  & Standard Delivery</h1>
                <p>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
            </div>
            <div className='p-3 bg-white rounded-2xl flex flex-col items-center hover:bg-primary'>
                <img src={service} alt=""/>
                <h1 className='py-2.5 text-2xl font-bold'>Express  & Standard Delivery</h1>
                <p>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
            </div>
            <div className='p-3 bg-white rounded-2xl flex flex-col items-center hover:bg-primary'>
                <img src={service} alt=""/>
                <h1 className='py-2.5 text-2xl font-bold'>Express  & Standard Delivery</h1>
                <p>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
            </div>
            <div className='p-3 bg-white rounded-2xl flex flex-col items-center hover:bg-primary'>
                <img src={service} alt=""/>
                <h1 className='py-2.5 text-2xl font-bold'>Express  & Standard Delivery</h1>
                <p>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
            </div>
            <div className='p-3 bg-white rounded-2xl flex flex-col items-center hover:bg-primary'>
                <img src={service} alt=""/>
                <h1 className='py-2.5 text-2xl font-bold'>Express  & Standard Delivery</h1>
                <p>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
            </div>
            <div className='p-3 bg-white rounded-2xl flex flex-col items-center hover:bg-primary'>
                <img src={service} alt=""/>
                <h1 className='py-2.5 text-2xl font-bold'>Express  & Standard Delivery</h1>
                <p>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
            </div>
        </div>
    </div>
  )
}
export default OurServices