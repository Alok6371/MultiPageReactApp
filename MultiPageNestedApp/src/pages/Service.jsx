import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Service = () => {
    return (
        <div className=' h-full bg-purple-300 min-h-[90vh]'>
            <Link to={'/services/web'}>
                <button className='bg-gray-300 m-20 p-2 text-2xl rounded-lg'>
                    Web
                </button>
            </Link>
            <Link to={'/services/uiux'}>
                <button className='bg-gray-300 m-20 p-2 text-2xl rounded-lg '>
                    Ui UX
                </button>
            </Link>
            <Link to={'/services/mobile'}>
                <button className='bg-gray-300 m-20 p-2 text-2xl rounded-lg'>
                    Mobile
                </button>
            </Link>
            <Outlet />
        </div>
    )
}

export default Service