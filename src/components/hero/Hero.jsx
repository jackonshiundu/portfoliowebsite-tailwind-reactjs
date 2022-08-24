import React from 'react'

const Hero = () => {
  return (
    <div id='hero' >  
       <div className='h-[60vh] lg:h-screen bg-gradient-to-t from-indigo-200 relative overflow-hidden dark:from-slate-800 dark:to-slate-900'>
        {/* ------------image------------- */}
        <img src={require('../img/man.png')} alt="Man" className='absolute bottom-0 h-5/6 right-0 lg:left-0 mx-auto'/>
        {/* ------------Circle------------- */}
        <div className='hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto  w-big h-big bg-indigo-900 rounded-full -z-10'>
        </div>
        {/* -----------text------------------- */}
        <div className='absolute top-1/3 left-5  text-xl sm:left-10 sm:text-5xl md:left-1/4 md:text-6xl lg:left-5 xl:text-7xl font-bold'>
          <span className='text-gray-600'>Frelance</span>
          <p className='text-red-600'>Developer</p>
        </div>
  {/* -----------right card------------------- */}
         <div className='hidden lg:flex flex-col gap-5 rounded-md shadow-md shadow-indigo-900 absolute top-0 bottom-0 m-auto right-10 bg-white dark:bg-slate-900 h-fit p-6 w-1/3 ' >
          <h1 className='text-4xl font-bold text-indigo-900'>Hi I am Jaguar,</h1>
          <p className='text-gray-400'>With over 10 years of experinece on web design and development, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore corrupti maiores similique quo, ullam nam quas ratione ipsa sequi officiis!</p>
          <a href="#contact" className='bg-indigo-600 text-white text-xl px-3 py-2 w-fit rounded-md font-semibold'>Hire Me</a>
         </div>
       </div>
    </div>
  )
}

export default Hero
