'use client'

import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Image from 'next/image'
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { PageRoutes } from '../enum/routes.enum';
import Heading from './Heading';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(prev => !prev)
  }

  return (
    <div className='py-3 shadow-lg px-14 flex bg-white items-center justify-between'>
      <Image src={logo} alt='logo' height={200} width={100} />
      <div className='flex space-x-20'>
        <ul className='flex space-x-9 items-center justify-center'>
          <Heading path={PageRoutes.HOME} heading='Home' className='cursor-pointer' />
          <Heading path={PageRoutes.ABOUT} heading='About' className='cursor-pointer' />
          <Heading path={PageRoutes.MENU} heading='Menu' className='cursor-pointer' />
          <Heading path={PageRoutes.CONTACT} heading='Contact' className='cursor-pointer' />
        </ul>
        <div className='flex space-x-6 items-center justify-center'>
          <div className='relative'>
            <FaShoppingCart size={25} className='cursor-pointer text-gray-600' />
            <div className='absolute -top-2 -right-3 p-1 bg-green-500 h-4 w-4 rounded-full flex text-[.7rem] items-center justify-center text-white'>0</div>
          </div>
          <div>
            <div className='border-2 border-slate-400 rounded-full p-1'>
              <FaUser size={25} className='cursor-pointer text-gray-600'
                onClick={handleShowMenu}
              />
            </div>

            {
              showMenu && (
                <div className='absolute right-2 bg-white py-2 px-4 flex flex-col shadow drop-shadow-md'>
                  <Link to={PageRoutes.NEW}><button onClick={() => setShowMenu(!showMenu)}>New Product</button></Link>
                  <Link to={PageRoutes.LOGIN}><button onClick={() => setShowMenu(!showMenu)}>Login</button></Link>
                </div>
              )
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar