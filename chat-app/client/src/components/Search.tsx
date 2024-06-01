'use client'

import { addFriendUser } from '@/app/api'
import { addFriendRequest, deleteFriendRequest } from '@/app/redux/authSlice'
import Image from 'next/image'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'

const Search = () => {
  const [search, setSearch] = useState('')
  const [add, setAdd] = useState(false)
  const allData = useSelector((state: any) => state.auth.allUser)
  const userData = useSelector((state: any)=> state.auth.user)
  const dispatch = useDispatch()

  // console.log(userData)

  const { mutate } = useMutation(['add'], addFriendUser, {
    onSuccess: res => {
      console.log(res)
    },
    onError: error => {
      console.log(error)
    }
  })

  const addFriend = (id: any) =>{

    // const oneId = allData.filter((item: any)=>{
    //   return item._id === id
    // })
    if(!add){
      mutate(userData?.data)
    }
    setAdd(!add)

    // if(add){
    //   toast('request cancel!')
    //   dispatch(deleteFriendRequest(id))
    // }
    // toast('request sent successfully')
    // dispatch(addFriendRequest(oneId))
  }
  return (
    <div className='border rounded-lg'>
      <input type='text'
        onChange={(e) => setSearch(e.target.value)}
        placeholder='find friends'
        className='px-2 focus:outline-none py-1 md:w-[300px] w-[200px] lg:w-[400px]'
      />
      <button className='bg-black py-1 md:px-3 hover:bg-black/90 border border-black rounded-tr-lg rounded-br-lg text-white'>Search</button>
      {search &&
        allData.filter((item: any) => {
          return search.toLowerCase() === '' ? item : item.fname.toLowerCase().includes(search)
        }).map((item: any) => {
          return (
            <div key={item._id} className='fixed px-5 md:mt-5 shadow drop-shadow-3xl flex flex-col'>
              <div className='flex py-2 space-x-9'>
                <div className='flex items-center space-x-2'>
                  <Image src={item.profile} alt='' width={10} height={8} className='rounded-full h-8 w-8' />
                  <h3 className='capitalize'>{item.fname +' '+ item.lname}</h3>
                </div>
                <button onClick={()=>addFriend(item?._id)} className='bg-blue-500 px-5 py-2 rounded-md text-white '>{add ? 'cancel' : 'Add friend'}</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Search