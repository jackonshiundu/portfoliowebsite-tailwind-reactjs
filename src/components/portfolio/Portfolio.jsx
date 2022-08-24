import React from 'react'

const Portfolio = () => {
  return (
    <div id='services' className='dark:bg-slate-900'>
        <div className='container mx-auto'>
          {/*  --------- top----------- */}
          <div className='flex flex-col gap-3 items-center'>
            <h1 className='text-indigo-600 font-bold'>Portfolio</h1>
            <h1 className='text-3xl dark:text-slate-200'>Works And Projects</h1>
            <p className='w-1/2 text-center dark:text-slate-200'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa voluptates natus quia laboriosam commodi</p>
          </div>
          {/*  --------- bottom----------- */}
          <div className= 'p-5 sm:p-0 flex flex-wrap justify-center'>
            {/* --------------cards--------------- */}
             <div className='w-full md:w-4/12 lg:w-1/5 shadow-lg rounded-lg mx-3 my-6 p-5  lg:w-3/12'>
                 <img src={require('../img/item.png')} alt="" />
             </div>
             <div className='w-full md:w-4/12 lg:w-1/5 shadow-lg rounded-lg mx-3 my-6 p-5  lg:w-3/12'>
                 <img src={require('../img/item.png')} alt="" />
             </div>
             <div className='w-full md:w-4/12 lg:w-1/5 shadow-lg rounded-lg mx-3 my-6 p-5  lg:w-3/12'>
                 <img src={require('../img/item.png')} alt="" />
             </div>
             <div className='w-full md:w-4/12 lg:w-1/5 shadow-lg rounded-lg mx-3 my-6 p-5  lg:w-3/12'>
                 <img src={require('../img/item.png')} alt="" />
             </div>
             <div className='w-full md:w-4/12 lg:w-1/5 shadow-lg rounded-lg mx-3 my-6 p-5  lg:w-3/12'>
                 <img src={require('../img/item.png')} alt="" />
             </div>
             <div className='w-full md:w-4/12 lg:w-1/5 shadow-lg rounded-lg mx-3 my-6 p-5  lg:w-3/12'>
                 <img src={require('../img/item.png')} alt="" />
             </div>
             <div className='w-full md:w-4/12 lg:w-1/5 shadow-lg rounded-lg mx-3 my-6 p-5  lg:w-3/12'>
                 <img src={require('../img/item.png')} alt="" />
             </div>
             <div className='w-full md:w-4/12 lg:w-1/5 shadow-lg rounded-lg mx-3 my-6 p-5  lg:w-3/12'>
                 <img src={require('../img/item.png')} alt="" />
             </div>
          </div> 
        </div>
    </div>)
}

export default Portfolio;