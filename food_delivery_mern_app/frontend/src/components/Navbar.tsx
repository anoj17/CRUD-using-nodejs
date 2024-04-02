'use client'

import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Image from 'next/image'
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import Heading from './Heading';
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux';
import { logoutRedux } from '../app/redux/authSlice'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showHam, setShowHam] = useState(false)

  const cartNumber = useSelector((state: any) => state.product.cartSlice)
  // console.log(cartNumber)

  const dispatch = useDispatch()

  const { isAuthenticated } = useSelector((state: any) => state.auth)
  // console.log(userData)

  const handleShowMenu = () => {
    setShowMenu(prev => !prev)
  }

  const handleLogOut = () => {
    console.log("logout successfully!")
    setShowMenu(!showMenu)
    dispatch(logoutRedux({}))
  }

  return <>
    <div className='py-4 shadow-lg px-8 lg:px-14 md:px-6 flex bg-white items-center justify-between'>
      <Image src={logo} alt='logo' height={200} width={100} />
      <div className='flex space-x-20 md:space-x-10'>
        <ul className='md:flex lg:space-x-9 hidden md:space-x-5 items-center justify-center'>
          <Heading path='/' heading='Home' changeMenu={() => { }} className='cursor-pointer' />
          <Heading path='/about' heading='About' changeMenu={() => { }} className='cursor-pointer' />
          <Heading path='/menu' heading='Menu' changeMenu={() => { }} className='cursor-pointer' />
          <Heading path='/contact' heading='Contact' changeMenu={() => { }} className='cursor-pointer' />
        </ul>
        <div className='flex lg:space-x-6 space-x-6 md:space-x-5 items-center justify-center'>
          <Link href={"/cart"}>
            <div className='relative'>
              <FaShoppingCart size={25} className='cursor-pointer text-gray-600' />
              <div className='absolute -top-2 -right-3 p-1 bg-green-500 h-4 w-4 rounded-full flex text-[.7rem] items-center justify-center text-white'>{cartNumber.length}</div>
            </div>
          </Link>
          <div>
            <div className='border-2 border-slate-400 rounded-full p-1'>
              <FaUser size={25} className='cursor-pointer text-gray-600'
                onClick={handleShowMenu}
              />
            </div>

            {
              showMenu && (
                <div className={`${!isAuthenticated ? 'right-9' : 'right-3'} absolute bg-white py-2 px-4 flex flex-col shadow z-50 drop-shadow-md`}>
                  {
                    isAuthenticated &&
                    <Link href='/newproduct'><button onClick={() => setShowMenu(!showMenu)}>Add Product</button></Link>
                  }
                  {
                    !isAuthenticated ?
                      <Link href='/login'><button onClick={() => setShowMenu(!showMenu)}>Login</button></Link> :
                      <Link
                        href='/'><button onClick={handleLogOut}>Logout</button></Link>
                  }
                </div>
              )
            }
          </div>
          <div onClick={() => setShowHam(!showHam)} className='text-gray-700 md:hidden'>
            {
              !showHam ?
                <GiHamburgerMenu size={20} /> :
                <ImCross size={20} />
            }
          </div>
        </div>
      </div>
    </div>
    <div className={`${showHam ? 'visible h-full' : 'hidden'} fixed top-[70px] left-0 w-full bg-gray-700 z-50 backdrop-blur-md md:hidden `}>
      <ul className='flex flex-col space-y-6 pt-4 items-center justify-center'>
        <Heading path='/' heading='Home' changeMenu={() => setShowHam(!showHam)} className='text-white cursor-pointer' />
        <Heading path='/about' heading='About' changeMenu={() => setShowHam(!showHam)} className='text-white cursor-pointer' />
        <Heading path='/menu' heading='Menu' changeMenu={() => setShowHam(!showHam)} className='text-white cursor-pointer' />
        <Heading path='/contact' heading='Contact' changeMenu={() => setShowHam(!showHam)} className='text-white cursor-pointer' />
      </ul>
    </div>
  </>
}

export default Navbar