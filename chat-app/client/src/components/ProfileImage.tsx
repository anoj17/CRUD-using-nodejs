'use client'

import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import image from '../app/assets/login-animation.gif'
import Link from 'next/link'
import { logOutRedux } from '@/app/redux/authSlice'
import { useRouter } from 'next/navigation'

interface RootState {
  auth: {
    user: {
      data: {
        profile: string
      } | null
    }
  }
}

const ProfileImage = () => {
  const [isShowProfile, setIsShowProfile] = useState(false)
  const userData = useSelector((state: RootState) => state.auth.user.data)

  const router = useRouter()

  const dispatch = useDispatch()

  const showProfile = () => {
    setIsShowProfile(!isShowProfile)
  }

  const logout = () => {
    setIsShowProfile(false)
    dispatch(logOutRedux({}))
    router.push('/')
  }

  if (!userData || !userData.profile) {
    return null
  }

  return <>
    <div className='relative'>
      <div>
        <Image src={userData.profile} onClick={showProfile} alt='profile' height={10} width={10} className='w-8 cursor-pointer h-8 rounded-full' />
      </div>
      {
        isShowProfile && <div className='flex flex-col absolute text-white w-[150px] -bottom-20 -right-8'>
          <Link href={`/profile`} className='cursor-pointer border-b py-1 bg-black hover:bg-black/60 pl-2'>Profile</Link>
          <Link href={'/'} onClick={logout} className='cursor-pointer py-1 pl-2 bg-black hover:bg-black/60'>Log Out</Link>
        </div>
      }
    </div>
  </>
}

export default ProfileImage