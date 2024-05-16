'use client'

import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import image from '../app/assets/login-animation.gif'

const ProfileImage = () => {
  const userData = useSelector((state: any)=>state.auth.user.data)  
  // console.log(userData)
  return (
    <Image src={image} alt='profile' height={10} width={10} className='w-10 h-10 rounded-full'/>
  )
}

export default ProfileImage