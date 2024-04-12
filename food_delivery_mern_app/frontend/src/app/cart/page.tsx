'use client';

import Image from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '@/components/CartItem';
import empty from '../../assets/emptyCart.gif'

const page = () => {

  const productData = useSelector((state: any) => state.product.cartSlice)
  // console.log(productData)
  return (
    <div className='bg-slate-200 flex flex-col px-4 md:px-20 justify-center items-center w-full py-4'>
      <h1 className='text-center py-3 text-3xl md:text-4xl font-bold'>Cart Product <span className='text-red-600'>List</span></h1>

      <div className='flex justify-center md:w-full items-center'>
        {
          productData[0] ?
            <div className='w-[330px]'>
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
            </div> :
            <div className='h-full w-full flex justify-center items-center'>
              <Image src={empty} alt='emptyImage' />
            </div>
        }
      </div>

    </div>
  )
}

export default page