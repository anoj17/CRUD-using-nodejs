'use client';

import Image from 'next/image'
import image from '../assets/login-animation.gif'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { DevTool } from '@hookform/devtools'
import Link from 'next/link';
import {useMutation} from 'react-query'
import {Signin} from '../api/index.js'

const page = () => {

    const [showEye, setShowEye] = useState(false)
    const form = useForm()

    const{handleSubmit, control, register} = form

    const {mutate} = useMutation(['signin'], Signin, {
       onSuccess: res => {
        console.log(res)
       },
       onError: error=>{
        console.log(error)
       }
    })

    const loginUser = (data: any) =>{
        mutate(data)
    }

  return (
    <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">

        <div className='flex flex-col items-center justify-center py-6'>
            <Image src={image} alt='image' height={100} width={100} className=''/>
            <h1 className='py-2 font-semibold text-lg'>SIGN IN</h1>
        </div>
          <form className="space-y-4"
            onSubmit={handleSubmit(loginUser)}
            action="#"
            method="POST">

<div>
              <label className="block text-sm font-medium leading-6 text-gray-900">First Name</label>
              <div className="mt-2">
                <input id="fname"
                  {...register('fname')}
                  type="text"
                  required
                  className="block focus:outline-none w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
              <div className="mt-2">
                <input id="lname"
                  {...register('lname')}
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
            <p className='text-[.9rem] text-center'>Already have an account?<Link href={'/login'} className='text-blue-700 underline font-semibold'>Login</Link></p>
          </form>
          <DevTool control={control} />
        </div>
  )
}

export default page