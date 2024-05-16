'use client'

import React from 'react'
import { useSelector } from 'react-redux'
import image from '../app/assets/login-animation.gif'
import Image from 'next/image'
import { IoSearch } from "react-icons/io5";

const SideBar = () => {

  const userData = useSelector((state: any) => state.auth.user.data)
  return <>

    <div className='lg:w-[400px] lg:h-[90vh] scrollbar-none overflow-scroll shadow drop-shadow-2xl '>
      <div className='flex space-x-3 items-center bg-gray-400 px-3 py-2'>
        <div className='flex space-x-1 cursor-pointer items-center'>
          <Image src={image} alt='avatar' className='h-6 w-6 rounded-full' />
          <h3 className='font-semibold hover:underline text-sm'>{userData?.fname + userData?.lname}</h3>
        </div>
        <div className='border flex border-black bg-black/90 items-center pr-4 rounded-lg'>
          <input type='text'
            placeholder='search'
            className='px-2 focus:outline-none text-gray-400 rounded-lg bg-black/90 md:w-[200px] w-[120px]'
          />
          <IoSearch size={15} className='text-gray-400' />
          {/* <button className='bg-black py-1 md:px-3 hover:bg-black/90 border border-black rounded-tr-lg rounded-br-lg text-white'>Search</button> */}
        </div>
      </div>
    </div>

  </>
}

export default SideBar