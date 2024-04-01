'use client';

import Image from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '@/components/CartItem';

const page = () => {

  const productData = useSelector((state: any) => state.product.cartSlice)
  // console.log(productData)
  return (
    <div className='bg-slate-200 flex flex-col justify-center items-center w-full py-4'>
      <h1 className='text-center py-3 text-3xl md:text-4xl font-bold'>Cart Product <span className='text-red-600'>List</span></h1>
      {
        productData[0] && productData.map((item: any) => (
          <CartItem key={item._id}
            id={item._id}
            name={item.name}
            price={item.price}
            category={item.category}
            image={item.image}
            qty={item.qty}
            total={item.total}

          />
        ))
      }
    </div>
  )
}

export default page