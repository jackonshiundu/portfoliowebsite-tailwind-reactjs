import React from 'react'

const Services = () => {
  return (
    <div id='work' className='dark:bg-slate-900'>
        <div className='container mx-auto '>
          {/*  --------- top----------- */}
          <div className='flex flex-col gap-3 items-center'>
            <h1 className='text-indigo-600 font-bold '>Services</h1>
            <h1 className='text-3xl dark:text-slate-100'>What do i offer?</h1>
            <p className='w-1/2 text-center dark:text-slate-100'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa voluptates natus quia laboriosam commodi, aliquid vitae omnis ratione sapiente iste?</p>
          </div>
          {/*  --------- bottom----------- */}
          <div className= 'p-5 sm:p-0 flex flex-wrap justify-center'>
            {/* --------------cards--------------- */}
             <div className='w-full md:w-4/12 shadow-lg rounded-lg mx-3 my-6 p-5 flex flex-col gap=3 lg:w-3/12 '>
                 <img src={require('../img/icon.png')} alt=""  className='w-10'/>
                 <h1 className='font-medium text-lg text-indigo-900'>UX/UI Design</h1>
                 <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ea nam aut dicta.</p>
                 <a href="" className='text-indigo-600 font-semibold text-sm py-5'>Read More</a>
             </div>
             <div className='w-full md:w-4/12 shadow-lg rounded-lg mx-3 my-6 p-5 flex flex-col gap=3 lg:w-3/12'>
                 <img src={require('../img/icon.png')} alt=""  className='w-10'/>
                 <h1 className='font-medium text-lg text-indigo-900'>UX/UI Design</h1>
                 <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ea nam aut dicta.</p>
                 <a href="" className='text-indigo-600 font-semibold text-sm py-5'>Read More</a>
             </div>
             <div className='w-full md:w-4/12 shadow-lg rounded-lg mx-3 my-6 p-5 flex flex-col gap=3 lg:w-3/12'>
                 <img src={require('../img/icon.png')} alt=""  className='w-10'/>
                 <h1 className='font-medium text-lg text-indigo-900'>UX/UI Design</h1>
                 <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ea nam aut dicta.</p>
                 <a href="" className='text-indigo-600 font-semibold text-sm py-5'>Read More</a>
             </div>
             <div className='w-full md:w-4/12 shadow-lg rounded-lg mx-3 my-6 p-5 flex flex-col gap=3 lg:w-3/12'>
                 <img src={require('../img/icon.png')} alt=""  className='w-10'/>
                 <h1 className='font-medium text-lg text-indigo-900'>UX/UI Design</h1>
                 <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ea nam aut dicta.</p>
                 <a href="" className='text-indigo-600 font-semibold text-sm py-5'>Read More</a>
             </div>
             <div className='w-full md:w-4/12 shadow-lg rounded-lg mx-3 my-6 p-5 flex flex-col gap=3 lg:w-3/12'>
                 <img src={require('../img/icon.png')} alt=""  className='w-10'/>
                 <h1 className='font-medium text-lg text-indigo-900'>UX/UI Design</h1>
                 <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ea nam aut dicta.</p>
                 <a href="" className='text-indigo-600 font-semibold text-sm py-5'>Read More</a>
             </div>
             <div className='w-full md:w-4/12 shadow-lg rounded-lg mx-3 my-6 p-5 flex flex-col gap=3 lg:w-3/12'>
                 <img src={require('../img/icon.png')} alt=""  className='w-10'/>
                 <h1 className='font-medium text-lg text-indigo-900'>UX/UI Design</h1>
                 <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ea nam aut dicta.</p>
                 <a href="" className='text-indigo-600 font-semibold text-sm py-5'>Read More</a>
             </div>
          </div> 
        </div>
    </div>
  )
}

export default Services  