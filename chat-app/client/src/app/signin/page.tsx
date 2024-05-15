'use client';

import Image from 'next/image'
import imageLogin from '../assets/login-animation.gif'
import { useForm } from 'react-hook-form'
import { useRef, useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { DevTool } from '@hookform/devtools'
import Link from 'next/link';
import { useMutation } from 'react-query'
import { Signin } from '../api/index.js'
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast'

const page = () => {

  const ref = useRef<HTMLInputElement>(null)

  const router = useRouter()

  const [image, setImage] = useState('')
  const [data, setData] = useState({
    fname: '',
    lname: '',
    password: '',
    profile: '',
    phone: ''
  })

  const [showEye, setShowEye] = useState(false)
  // const form = useForm()

  // const { handleSubmit, control, register } = form

  const { mutate } = useMutation(['signin'], Signin, {
    onSuccess: res => {
      toast(res?.data.message)
      if(res?.data.alert){
        console.log(res.data)
        router.push('/login')
      }
    },
    onError: error => {
      console.log(error)
    }
  })

  const changeInput = (e: any) => {
    const { name, value } = e.target

    setData((prev: any) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const clickImage = (e: any) => {
    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])

    reader.onload = () => {
      const result = reader.result as string
      setImage(result)
      setData((prev: any) => {
        return {
          ...prev,
          profile: result
        }
      })
    }
  }

  const chooseImage = () => {
    if (ref.current) {
      ref.current.click();
    }
  }

  const loginUser = (e: any) => {
    e.preventDefault()
    // console.log(data)
    mutate(data)
  }

  return (
    <div className="pt-7 w-full flex flex-col items-center justify-center ">

      <div className='flex flex-col items-center justify-center'>
        <div className='h-50 w-[70px] object-contain overflow-hidden' >
          {
            image ? <Image className="mx-auto h-16 w-auto shadow cursor-pointer drop-shadow-lg rounded-full" alt='logo'
              src={image}
              onClick={chooseImage}
              width={70}
              height={70}
            /> :
              <Image className="mx-auto h-16 w-auto shadow cursor-pointer drop-shadow-lg rounded-full" alt='logo'
                src={imageLogin}
                onClick={chooseImage}
              />
          }

        </div>
        <h1 className='py-1 font-semibold text-lg'>SIGN IN</h1>
      </div>

      <form className="space-y-4 py-5 shadow drop-shadow-5xl rounded-lg w-full px-20 md:w-[500px] md:px-16"
        onSubmit={loginUser}
        action="#"
        method="POST">

        <input className='hidden' name='profile' ref={ref} type='file' accept='image/*' onChange={clickImage} />
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">First Name</label>
          <div className="mt-2">
            <input id="fname"
              type="text"
              name='fname'
              onChange={changeInput} value={data.fname}
              required
              className="block focus:outline-none w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
          <div className="mt-2">
            <input id="lname"
              type="text"
              name='lname'
              onChange={changeInput} value={data.lname}
              required
              className="block focus:outline-none w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">Mobile Number</label>
          <div className="mt-2">
            <input id="number"
              type="number"
              name='phone'
              onChange={changeInput} value={data.phone}
              required
              className="block focus:outline-none w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="mt-2 flex bg-white items-center justify-center border rounded-md pr-3 ring-1 ring-inset ring-gray-300 shadow-sm">
            <input id="password"
              type={showEye ? 'text' : 'password'}
              required
              name='password'
              onChange={changeInput} value={data.password}
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
          <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">SIGN IN</button>
        </div>
        <p className='text-[.9rem] text-center'>Already have an account?<Link href={'/login'} className='text-blue-700 underline font-semibold'>Login</Link></p>
      </form>
    </div>
  )
}

export default page