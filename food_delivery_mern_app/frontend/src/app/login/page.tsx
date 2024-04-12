'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import signLogo from '../../assets/login-animation.gif'
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { userLogin } from '../server/api';
import { useMutation } from 'react-query';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { loginRedux } from '../redux/authSlice';


const Login = () => {
  const [showEye, setShowEye] = useState(false)

  const router = useRouter()

  const [userData, setUserData] = useState()

  const userDatas = useSelector(state => state)

  const dispatch = useDispatch()

  const form = useForm()
  const { register, control, handleSubmit } = form

  const { mutate } = useMutation(['login'], userLogin, {
    onSuccess: res => {
      toast(res?.data.message)
      if (res?.data.alert) {
        router.push("/")
        dispatch(loginRedux(res?.data))
        // console.log(res.data)
      }
    },
    onError: error => {
      console.log(error)
    }
  })

  const loginUser = (data: any) => {
    // console.log(data)
    setUserData(data)
    mutate(data)
  }

  return <>
    <div className='overflow-y-hidden h-[85vh]'>
      <div className="flex flex-col justify-center lg:h-[87vh] pb-20 lg:pb-2 pt-4 lg:pt-0 lg:mx-72 md:mx-20 md:px-10 lg:shadow lg:drop-shadow-sm lg:mt-2 px-10 bg-white lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <Image className="mx-auto h-16 w-auto bg-fill shadow drop-shadow-lg rounded-full" alt='logo' src={signLogo} />
          {/* <label htmlFor='profileImage'>
              <div className='absolute bottom-0'>
                <input type='file' className='' id='profileImage' />
              </div>
            </label> */}
          <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login in to your account</h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-4"
            onSubmit={handleSubmit(loginUser)}
            action="#"
            method="POST">

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">email</label>
              <div className="mt-2">
                <input id="email"
                  {...register('email')}
                  type="email"
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
      </div>
    </div>

  </>
}

export default Login