'use client'

import Image from 'next/image'
import React, { useRef, useState } from 'react'
import signLogo from '../../assets/login-animation.gif'
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useRouter } from 'next/navigation';
import { signIn } from '../server/api'
import { useMutation } from 'react-query';
import toast, { Toaster } from 'react-hot-toast';

const SighUp = () => {
  const [showEye, setShowEye] = useState(false)
  const [image, setImage] = useState()
  const router = useRouter()

  const ref = useRef(null)

  const form = useForm({
    defaultValues: {
      fname: '',
      lname: '',
      email: '',
      password: '',
      cpassword: '',
    }
  })
  const { register, control, handleSubmit } = form

  const { isLoading, mutate } = useMutation(['add'], signIn, {
    onSuccess: res => {
      toast(res?.data.message)

      if (res?.data.alert) {
        router.push("/login")
      }
      // console.log(formData)
    },
    onError: error => {
      console.log(error)
    }
  })

  const registerUser = (data: { password: string, cpassword: string, fname: string, lname: string, email: string }) => {
    // console.log(data.password)
    const { password, cpassword } = data
    if (password !== cpassword) {
      alert("password and confirm password cannot matches")
      return;
    }

    // const formData = new FormData()

    // formData.append('fname', data.fname)
    // formData.append('lname', data.lname)
    // formData.append('email', data.email)
    // formData.append('password', data.password)
    // formData.append('cpassword', data.cpassword)
    // formData.append('image', image)
    // useEffect(() => {
    // }, [image]);

    mutate(data)

    // mutate(data)
    // setImage(profileImage)
    console.log(data)
  }

  const showPassword = () => {
    setShowEye(!showEye)
  }

  const selectProfile = () => {
    ref.current.click()
    // console.log(ref)
  }

  const changeProfile = (e: any) => {
    setImage(e.target.files[0])
    // console.log(image)
  }

  return <>

    <div className="flex flex-col justify-center h-screen items-center lg:h-[87vh] scrollbar-none overflow-y-scroll lg:mt-1 lg:mx-72 px-20 md:px-10 md:mx-20 mx-0 shadow drop-shadow-sm bg-white pt-44 lg:pt-20 py-6 lg:px-8">

      <div className="mt-5 w-full sm:max-w-sm">
        <div className="sm:mx-auto flex flex-col items-center justify-center sm:max-w-sm lg:pt-4">
          <div className='h-50 w-[70px] object-contain overflow-hidden' >
            {
              image ? <Image className="mx-auto h-[60px] w-[60px] shadow cursor-pointer drop-shadow-lg overflow-hidden object-contain rounded-full" alt='logo' width={100} height={200} src={URL.createObjectURL(image)}
                onClick={selectProfile} /> :
                <Image className="mx-auto h-16 w-auto shadow cursor-pointer drop-shadow-lg rounded-full" alt='logo' src={signLogo} onClick={selectProfile} />
            }
          </div>
          <div>
            <label htmlFor='profileImage'>
              <input type='file' accept='image/*' ref={ref} onChange={changeProfile} className='hidden' />
            </label>
          </div>
          <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>
        <form className="space-y-4 mt-3" onSubmit={handleSubmit(registerUser)}>
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
                onClick={showPassword}
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
      <Toaster />
    </div>

  </>
}

export default SighUp