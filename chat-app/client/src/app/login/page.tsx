'use client';

import Image from 'next/image'
import image from '../assets/login-animation.gif'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { DevTool } from '@hookform/devtools'
import Link from 'next/link';
import { useMutation } from 'react-query';
import { login } from '../api';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { loginRedux } from '../redux/authSlice'

const page = () => {

    const [showEye, setShowEye] = useState(false)
    const form = useForm()

    const router = useRouter()
    const dispatch = useDispatch()

    const userData = useSelector((state: any)=> state.auth)

    console.log(userData)

    const {mutate} = useMutation(['loginUser'], login, {
      onSuccess: res => {
        toast(res?.data.message)
        if(res?.data.alert){
          router.push('/')
          dispatch(loginRedux(res?.data))
        }
      },
      onError: error => {
        console.log(error)
      }
    })

    const{handleSubmit, control, register} = form

    const loginUser = (data: any) =>{
        mutate(data)
    }

  return (
    <div className="pt-7 w-full flex flex-col items-center justify-center ">

        <div className='flex flex-col items-center justify-center py-6'>
            <Image src={image} alt='image' height={100} width={100} className=''/>
            <h1 className='py-2 font-semibold text-lg'>LOG IN</h1>
        </div>
          <form className="space-y-4 py-5 shadow drop-shadow-5xl rounded-lg w-full px-20 md:w-[500px] md:px-16"
            onSubmit={handleSubmit(loginUser)}
            action="#"
            method="POST">

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">Username</label>
              <div className="mt-2">
                <input id="username"
                  {...register('username')}
                  type="text"
                  required
                  className="block focus:outline-none w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div className="mt-2 flex items-center justify-center border rounded-md pr-3 ring-1 ring-inset ring-gray-300 shadow-sm">
                <input id="password"
                  {...register('password')}
                  type={showEye ? 'text' : 'password'}
                  required
                  className="focus:outline-none border-none block w-[95%] pl-3 py-1.5 text-gray-90 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                <span className='cursor-pointer'
                  onClick={() => setShowEye(!showEye)}
                >
                  {
                    showEye ?
                      <FaEye size={20} /> :
                      <FaRegEyeSlash size={20} />
                  }
                </span>
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log in</button>
            </div>
            <p className='text-[.9rem] text-center'>Don't have an account?<Link href={'/signin'} className='text-blue-700 underline font-semibold'>Signin</Link></p>
          </form>
          <DevTool control={control} />
        </div>
  )
}

export default page