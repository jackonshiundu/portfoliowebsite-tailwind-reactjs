import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='dark:bg-slate-900'>

      <div  className='container mx-auto dark:bg-slate-900'>
      {/* ----------------top part------------*/}
          <div className='flex flex-col gap-3 items-center'>
              <h1 className='text-indigo-600 font-bold'>CONTACT</h1>
              <h1 className='text-3xl dark:text-slate-200'>Have a Questions?</h1>
              <p className='w-1/2 text-center dark:text-slate-200'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa voluptates.</p>
          </div>
      {/* ----------------top part------------*/}
      <form action="" className='mt-5 p-8 flex flex-col gap-5 items-center'>
          <input type="text" placeholder='Name' className='p-2 w-full md:w-1/2 ring-1 ring-indigo-300 outline-none rounded-sm dark:bg-gray-700 dark:text-slate-100 dark:ring-0'/>
          <input type="email" placeholder='email@gmail.com' 
          className='p-2 w-full md:w-1/2 ring-1 ring-indigo-300 outline-none rounded-sm dark:bg-gray-700 dark:text-slate-100 dark:ring-0'/>
          <textarea id="" cols="30" rows="10" placeholder='Message'
          className='p-2 w-full md:w-1/2 ring-1 ring-indigo-300 outline-none rounded-sm dark:bg-gray-700 dark:text-slate-100 dark:ring-0'></textarea>
          <input type="submit" value="Submit" className='w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 rounded-md'/>
      </form>
      </div>
    </div>
  )
}

export default Contact