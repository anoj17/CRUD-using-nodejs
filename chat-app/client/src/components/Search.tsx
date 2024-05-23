'use client'

import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Search = () => {
  const [search, setSearch] = useState('')
  const allData = useSelector((state: any) => state.auth.allUser)
  // console.log(allData)
  return (
    <div className='border rounded-lg'>
      <input type='text'
        onChange={(e) => setSearch(e.target.value)}
        placeholder='find friends'
        className='px-2 focus:outline-none py-1 md:w-[300px] w-[200px] lg:w-[400px]'
      />
      <button className='bg-black py-1 md:px-3 hover:bg-black/90 border border-black rounded-tr-lg rounded-br-lg text-white'>Search</button>
      { search &&
        allData.filter((item: any) => {
          return search.toLowerCase() === '' ? item : item.fname.toLowerCase().includes(search)
        }).map((item: any) => {
          return (
            <div>
              {item.fname}
            </div>
          )
        })
      }
    </div>
  )
}

export default Search