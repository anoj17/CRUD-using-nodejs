'use client';

import React, { useRef, useState } from 'react'
import { useQuery } from 'react-query'
import { getData } from './server/api'
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setDataProduct } from './redux/productSlice';
import cycle from '../../public/cycle3.jpg'
import HomeItems from '../components/HomeItems'
import HomeCard from '@/components/HomeCard';
import ProductCategory from '@/components/ProductCategory';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import CategoryList from '@/components/CategoryList';

const page = () => {


  const dispatch = useDispatch()
  const productData = useSelector((state: any) => state.product.productList)
  const productDataList = productData.slice(0, 4)
  const productListVegetables = productData.filter((list: any) => list.category === 'vegetable', [])

  const loadingArray = new Array(4).fill(null)

  // const selectData = useSelector((state:any)=>state.state.selectCategory)
  // console.log(selectData)
  const categoryList = [...new Set(productData.map((list) => list.category))]
  // console.log(categoryList)

  const ref = useRef()

  const nextProduct = () => {
    ref.current.scrollLeft += 200
  }

  const prevProduct = () => {
    ref.current.scrollLeft -= 200
  }

  useQuery(['get'], getData, {
    onSuccess: res => {
      dispatch(setDataProduct(res?.data))
      // console.log(productListVegetables)
    },
    onError: error => {
      console.log(error)
    }
  })

  const [selectData, setSelectData] = useState(productData)
  console.log(productData)
  const selectCategory = (category: string) => {
    const result = productData.filter((item: any) => {
      return item.category === category
    })
    setSelectData(result)
  }

  return (
    <div className='p-3 px-6'>
      <div className='md:flex gap-3'>
        <div className=' md:w-1/2 py-2'>
          <div className='flex gap-2 rounded-full w-52 px-5 justify-center items-center bg-white shadow drop-shadow-md'>
            <p className='font-semibold text-[.9rem]'>Home Delivery</p>
            <Image src={cycle}
              alt='imageLogo'
              className='bg-transparent'
              style={{ backgroundColor: 'transparent' }}
              height={50}
              width={50}
            />
          </div>
          <div className='py-6'>
            <h1 className='md:text-6xl text-4xl font-bold text-center'>The Fasted Delivery in <span className='text-red-600'>Your Home</span></h1>
            <p className='py-3 text-slate-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate facere dicta, qui voluptatum maiores quidem ratione illo aliquid nostrum doloremque porro perspiciatis optio quasi. Tempora saepe quasi nemo culpa minus Lorem ipsum dolor, sit amet consectetur adipisicing elit nostrum doloremque porro perspiciatis optio quasi. Tempora saepe quasi nemo culpa minus Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <button className='py-2 px-5 hover:brightness-80 text-white bg-green-700 rounded-lg'>Order Now</button>
        </div>
        <div className='md:w-1/2 flex mt-5 md:mt-0 flex-wrap items-center justify-center gap-7 md:gap-2 min-h-52'>
          {
            productDataList[0] ? productDataList.map((item: any) => (
              <div key={item._id}>
                <HomeItems
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  category={item.category}
                />
              </div>
            ))
              :
              <HomeCard />
          }
        </div>
      </div>
      <div className='px-9 pb-5 pt-20'>
        <div className='flex items-center justify-center'>
          <h1 className='font-semibold text-2xl'>Fresh <span className='text-green-800'>Vegetables</span></h1>
          <div className='flex gap-2 ml-auto'>
            <button onClick={prevProduct} className='bg-yellow-500 p-2 rounded-full'><FaChevronLeft size={20} /></button>
            <button onClick={nextProduct} className='bg-yellow-500 p-2 rounded-full'><FaChevronRight size={20} /></button>
          </div>
        </div>
        <div className='flex md:gap-6 pt-3 overflow-x-scroll scrollbar-none scroll-smooth transition-all' ref={ref}>
          {
            productListVegetables[0] ? productListVegetables.map((item: any) => (
              <ProductCategory key={item._id}
                name={item.name}
                price={item.price}
                category={item.category}
                image={item.image}
              />
            ))
              :
              <div className='flex items-center min-h-44 justify-center w-full '>
                <HomeCard />
              </div>
          }
        </div>
      </div>
      <div className='py-14 mt-5'>
        <h1 className='text-4xl text-center font-bold'>Your <span className='text-red-600'>Choice</span></h1>
        <div className='flex pt-8 flex-wrap md:pl-0 gap-4 items-center justify-center'>
          {
            categoryList[0] && categoryList.map((item: any) => (
              <CategoryList category={item}
                selectCategory={() => selectCategory(item)}
              />
            ))
          }
        </div>
      </div>
      <div>
        <div className='flex flex-wrap gap-6 justify-center items-center'>
          {
             selectData.map((item: any) => (
              <ProductCategory key={item._id}
                name={item.name}
                price={item.price}
                category={item.category}
                image={item.image}
              />
            )) 
          }
        </div>
      </div>
    </div>
  )
}

export default page