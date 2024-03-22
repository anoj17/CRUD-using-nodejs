'use client'

import React from 'react'
import { Outlet } from 'react-router-dom'

const MainPage = () => {
  return (
    <div className=''>
      <Outlet />
    </div>
  )
}

export default MainPage