'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import signLogo from '../../assets/login-animation.gif'
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useRouter } from 'next/navigation';

const SighUp = () => {
  const [showEye, setShowEye] = useState(false)
  const router = useRouter()

  const form = useForm({
    defaultValues: {
      fname: '',
      lname: '',
      email: '',
      password: '',
      cpassword: ''
    }
  })
  const { register, control, handleSubmit } = form

  const registerUser = (data: { password: string, cpassword: string }) => {
    // console.log(data.password)
    const { password, cpassword } = data
    if (password !== cpassword) {
      alert("password and confirm password cannot matches")
    }
    else {
      // alert("successful")
      router.push("/login")
    }
  }
  return <>

    <div className="flex flex-col justify-center h-screen items-center lg:h-[87vh] scrollbar-none overflow-y-scroll lg:mt-2 lg:mx-72 px-20 md:px-10 md:mx-20 mx-0 shadow drop-shadow-sm bg-white pt-44 lg:pt-28 py-6 lg:px-8">
      <div className="sm:mx-auto sm:max-w-sm lg:pt-4">
        <Image className="mx-auto h-16 w-auto shadow drop-shadow-lg rounded-full" alt='logo' src={signLogo} />
        <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>

      <div className="mt-5 w-full sm:max-w-sm">
        <form className="space-y-4" action="#" onSubmit={handleSubmit(registerUser)} method="POST">
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">First Name</label>
            <div className="mt-2">
              <input id="fname"
                type="text"
                {...register('fname')}
                required
                className="block focus:outline-none w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
            <div className="mt-2">
              <input id="lname"
                type="text"
                {...register('lname')}
                required
                className="block focus:outline-none w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">email</label>
            <div className="mt-2">
              <input id="email"
                type="email"
                {...register('email')}
                required
                className="block focus:outline-none w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div className="mt-2 flex items-center justify-center border rounded-md pr-3 ring-1 ring-inset ring-gray-300 shadow-sm">
              <input id="password"
                type={showEye ? 'text' : 'password'}
                {...register('password')}
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
            <label className="block text-sm font-medium leading-6 text-gray-900">confirm Password</label>
            <div className="mt-2">
              <input id="cpassword"
                {...register('cpassword')}
                type="password"
                required
                className="block w-full pl-3 rounded-md focus:outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
          <p className='text-[.9rem] text-center'>Already have an account?<Link href={'/login'} className='text-blue-700 font-semibold underline'>login</Link></p>
        </form>
        <DevTool control={control} />
      </div>
    </div>

  </>
}

export default SighUp