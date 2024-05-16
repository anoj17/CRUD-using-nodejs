import React from 'react'

const Search = () => {
  return (
    <div className='border rounded-lg'>
        <input type='text'
        placeholder='find friends'
        className='px-2 focus:outline-none py-1 md:w-[300px] w-[200px] lg:w-[400px]'
        />
        <button className='bg-black py-1 md:px-3 hover:bg-black/90 border border-black rounded-tr-lg rounded-br-lg text-white'>Search</button>
    </div>
  )
}

export default Search