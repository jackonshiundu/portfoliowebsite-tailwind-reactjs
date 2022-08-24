import React from 'react'
import useDarkmode from '../../useDarkmode'
const NavBar = () => {

  const [colorTheme,setTheme]=useDarkmode()
  const displayMenu=()=>{
    
  }

  return (
    <div >
        <nav className='w-full fixed top-0 bg-white z-10 dark:bg-slate-900'>
          <div className='container mx-auto py-5 flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <img src={require('../img/logo.png')} alt="Logo" className='w-8'/>
              <span className='text-2xl font-bold dark:text-gray-300'>Jaguar & Portwind</span>
            </div>
            <ul className='hidden md:flex space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm '>
              <li className='hover:text-gray-400'>
                <a href="#hero">home</a>
              </li>
              <li className='hover:text-gray-400'>
                <a href="#about">About Me</a>
              </li> 
              <li className='hover:text-gray-400'>
                <a href="#services">Services</a>
              </li>
              <li className='hover:text-gray-400'>
                <a href="#work">Work</a>
              </li>
              <li className='hover:text-gray-400'>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <img src={require('../img/moon.png')} alt="Moon" className=' hidden md:block w-5 cursor-pointer' onClick={()=>setTheme(colorTheme)}/>
          <div className='space-y-1 md:hidden cursor-pointer' onClick={displayMenu}>
             <div className='w-5 h-1 bg-black dark:bg-slate-300'></div>
             <div className='w-5 h-1 bg-black dark:bg-slate-300 '></div>
             <div className='w-5 h-1 bg-black dark:bg-slate-300'></div>
          </div>
          <ul className='bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center hidden '>
               <li >
                <a href="#">home</a>
              </li>
              <li >
                <a href="#">About Me</a>
              </li> 
              <li >
                <a href="#">Services</a>
              </li>
              <li >
                <a href="#">Work</a>
              </li>
              <li >
                <a href="#">Contact</a>
              </li>
          </ul>
          </div>
        </nav>
    </div>
  )
}

export default NavBar