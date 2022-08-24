import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='w-full bg-gray-800'>
          <div className='container mx-auto py-5 flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <img src={require('../img/logo.png')} alt="Logo" className='w-8'/>
              <span className='text-2xl font-bold text-white'>Jaguar & Portwind</span>
            </div>
            <span className=' hidden md:block text-white  '>&copy; 2022 Jaguar & Portwind .Design With By Jackon</span>
          <div className='flex gap-3 '>
            <img src={require('../img/facebook.png')} alt="" className='w-4 cursor-pointer' />
            <img src={require('../img/instagram.png')} alt="" className='w-4 cursor-pointer' />
            <img src={require('../img/linkedin.png')} alt="" className='w-4 cursor-pointer' />
            <img src={require('../img/twitter.png')} alt="" className='w-4 cursor-pointer' />
          </div>
          </div>
        </div>
    </div>
  )
}

export default Footer