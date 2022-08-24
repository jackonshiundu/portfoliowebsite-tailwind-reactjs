import React from 'react'

const About = () => {
  return (
    <div id='about' className='px-10 dark:bg-slate-900'>
        <div className="container py-40  mx-auto flex flex-col-reverse lg:flex-row items-center gap-20">
            {/* ----------left----------- */}
             <div className="relative">
                <img src={require('../img/dots.png')} alt="dots" className=' h-1/4 absolute top-0 left-0 -z-10' />
                <div className='h-full rounded-full overflow-hidden'>
                    <img src={require("../img/portrait.png")} alt="" />
                </div>
             </div>
            {/* ----------Right----------- */}
            <div className='my-auto flex flex-col gap-3'>
                <h1 className='text-indigo-600 font-bold '>ABOUT ME</h1>
                <h1 className='text-3xl font-medium dark:text-slate-200'>Better Design </h1>
                <h1 className='text-3xl font-medium dark:text-slate-200'>Better Experience</  h1>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis exercitationem veniam nulla ipsa beatae quae?</p>
                <h2 className='text-gray-400 font-medium'> HTML</h2>
                <div className='w-full bg-gray-200 h-1.5 rounded-md'>
                    <div className='w-full bg-indigo-600 h-1.5 rounded-md'>
                    </div>
                </div>
                <h2 className='text-gray-400 font-medium'> Jarascript</h2>
                <div className='w-full bg-gray-200 h-1.5 rounded-md'>
                    <div className='w-4/6 bg-indigo-600 h-1.5 rounded-md'>
                    </div>
                </div>
                <h2 className='text-gray-400 font-medium'> React</h2>
                <div className='w-full bg-gray-200 h-1.5 rounded-md'>
                    <div className='w-5/6 bg-indigo-600 h-1.5 rounded-md'>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About