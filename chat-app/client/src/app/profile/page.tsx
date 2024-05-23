'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useSelector } from 'react-redux'
import { editProfile } from '../api'

const page = () => {
    const userData = useSelector((state: any) => state.auth.user.data)
    const [editUserData, setEditUserData] = useState(userData)
    const [updatePwd, setUpdatePwd] = useState({
        oldPwd: '',
        newPwd: ''
    })

    const { mutate } = useMutation(['edit'], editProfile, {
        onSuccess: res => {
            console.log(res)
        },
        onError: error => {
            console.log(error)
        }
    })

    const editUser = (e: any) => {
        const { name, value } = e.target

        setEditUserData({ ...userData, [name]: value })
    }

    const submitUpdateData = (e: any) => {
        e.preventDefault()
        mutate(editUserData)
    }

    return (
        <div className='flex justify-center items-center pt-10'>
            <div className=''>
                <form onSubmit={submitUpdateData} className='flex flex-col space-y-5 justify-center items-center lg:w-[500px]'>
                    <Image src={editUserData.profile} width={70} height={70} alt='profile'
                        className='rounded-full mb-5' />

                    <div className='flex flex-col space-y-2'>
                        <label>First Name</label>
                        <input onChange={editUser} name='fname' value={editUserData.fname} className='border py-1 lg:w-[500px] pl-2 rounded-md' />
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <label>Last Name</label>
                        <input onChange={editUser} name='lname' value={editUserData.lname} className='border py-1 lg:w-[500px] pl-2 rounded-md' />
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <label>Phone Number</label>
                        <input onChange={editUser} name='phone' value={editUserData.phone} className='border py-1 lg:w-[500px] pl-2 rounded-md'
                            type='number'
                        />
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <label>Old Password</label>
                        <input onChange={editUser} value={updatePwd.oldPwd} className='border py-1 lg:w-[500px] pl-2 rounded-md'
                            type='password'
                        />
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <label>New Password</label>
                        <input onChange={editUser} name='password' value={updatePwd.newPwd} className='border py-1 lg:w-[500px] pl-2 rounded-md'
                            type='password'
                        />
                    </div>
                    <div className='flex justify-center items-center space-x-5'>
                        <button type='submit' className='bg-blue-700 py-1 px-5 text-white rounded-lg'>Save</button>
                        <button className='bg-red-700 py-1 px-5 text-white rounded-lg'>Back</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page