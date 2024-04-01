'use client';

import HomeCard from '@/components/HomeCard';
import ProductCategory from '@/components/ProductCategory'
import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {

  const productData = useSelector((state: any) => state.product.productList)
  console.log(productData)
  return (
    <div className='px-5 py-3 bg-slate-200'>
      <div className='flex flex-wrap max-w-[85%] mx-auto gap-6 justify-center items-center'>
        {
          productData[0] ? productData.map((item: any) => (
            <ProductCategory key={item._id}
              id={item._id}
              name={item.name}
              price={item.price}
              category={item.category}
              image={item.image}
            />
          )) :
            <div className='h-screen w-full flex justify-center items-center'>
              <HomeCard />
            </div>
        }
      </div>
    </div>
  )
}

export default page