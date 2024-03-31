'use client';

import ProductCategory from '@/components/ProductCategory'
import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {

  const productData = useSelector((state: any) => state.product.productList)
  console.log(productData)
  return (
    <div className='px-5 py-3'>
      <div className='flex flex-wrap gap-6 justify-center items-center'>
        {
          productData[0] && productData.map((item: any) => (
            <ProductCategory key={item._id}
              name={item.name}
              price={item.price}
              category={item.category}
              image={item.image}
            />
          ))
        }
        hello
      </div>
    </div>
  )
}

export default page