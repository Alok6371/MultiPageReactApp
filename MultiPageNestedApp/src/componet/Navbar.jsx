import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className=' absolute flex fixed justify-between h-[10vh] items-center w-[100vw] p-3 bg-gray-300 top-0'>
            <div className='text-4xl'>
                LOGO
            </div>
            <div className='text-2xl '>
                <NavLink 
                className="p-3 hover:text-blue-800 font-semibold"
                to={'/'}>
                    Home
                </NavLink>
                <NavLink 
                className="p-3 hover:text-blue-800 font-semibold"
                to={'/services'}>
                    Services
                </NavLink>
                <NavLink 
                className="p-3 hover:text-blue-800 font-semibold"
                to={'/about'}>
                    About
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar