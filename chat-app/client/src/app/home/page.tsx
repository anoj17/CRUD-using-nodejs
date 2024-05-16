import Search from '@/components/Search'
import SideBar from '@/components/SideBar'
import { IoMdNotifications } from "react-icons/io";
import React from 'react'
import ProfileImage from '@/components/ProfileImage';

const page = () => {

  return <>

    <div className='flex shadow drop-shadow-2xl justify-between px-5 md:px-8 items-center py-3'>
      <h1 className='text-green-700 font-bold text-2xl'>Chat</h1>

        <Search />

      <div className='flex space-x-2 md:space-x-4 items-center'>
        <IoMdNotifications size={30} />
        <ProfileImage />
      </div>

    </div>

    <div>
      <SideBar />
    </div>

  </>
}

export default page