import React from 'react'
import { NavLink } from 'react-router-dom'



function Navbar() {
  return (
    <div className='pt-[91px]'>
        <ul className='flex lg:justify-between justify-around  lg:w-[349px] m-auto lg:font-medium lg:text-lg text-[#FFFFFF]'>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blogs</li>
        </ul>
    </div>
  )
}

export default Navbar
