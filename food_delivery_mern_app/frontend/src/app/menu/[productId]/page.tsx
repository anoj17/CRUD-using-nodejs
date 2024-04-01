'use client';

import CategoryList from '@/components/CategoryList';
import HomeCard from '@/components/HomeCard';
import ProductCategory from '@/components/ProductCategory';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { ImSpoonKnife } from "react-icons/im";

const page = () => {

    const params = useParams()
    // const id = params.productID

    const productData = useSelector((state: any) => state.product.productList)

    const categoryList = [...new Set(productData.map((list) => list.category))]

    const [displayProduct, setDisplayProduct] = useState(null)
    console.log(displayProduct)

    useEffect(() => {
        if (params.productId && productData) {
            const productDisplay = productData.filter((item: any) => item._id == params.productId)[0]
            setDisplayProduct(productDisplay)
        }
    }, [params.productId, productData])

    if (!displayProduct) {
        return <div className=' h-[90vh]  w-full flex justify-center items-center'><HomeCard /></div>
    }

    return <>
        <div className='w-full bg-slate-200 flex justify-center items-center'>
            <div className='md:flex-row space-y-3 py-4 bg-white my-4 shadow flex flex-col lg:w-[600px] md:h-[220px] drop-shadow-md rounded-lg group cursor-pointer items-center justify-center'>
                <div className='w-1/2 md:p-3 overflow-hidden'>
                    <Image src={displayProduct?.image} className='hover:scale-[1.1] transition-all' alt='imageItem' height={200} width={200} />
                </div>
                <div className='w-1/2 flex flex-col md:items-start items-center justify-center'>
                    <p className=' text-2xl capitalize pt-2 text-gray-500 text-md'>{displayProduct?.name}</p>
                    <h2 className='text-green-700 font-semibold'>{displayProduct?.category}</h2>
                    <h3><span className='text-red-600 text-md'>₹</span>{displayProduct?.price}</h3>
                    <h3><span className='text-red-600 text-md'></span>{displayProduct?.description}</h3>
                    <div className='md:space-x-4 pt-3 space-y-3 md:space-y-0 '>
                        <button className=' w-full md:w-[100px] py-1 hover:bg-black/90 text-white bg-black '>Buy Now</button>
                        <button className=' w-full md:w-[100px] py-1 hover:bg-black/90 text-white bg-black '>Add Cart</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='py-14 mt-5'>
            <h1 className='text-4xl text-center font-bold'>Related <span className='text-red-600'>Product</span></h1>
            <div className='flex pt-8 flex-wrap md:pl-0 gap-4 items-center justify-center'>
                {
                    categoryList[0] && categoryList.map((item: any) => (
                        <div className='flex flex-col cursor-pointer'>
                            <div className='bg-yellow-600 h-16 w-16 md:h-20 md:w-20 flex justify-center items-center rounded-full text-white'>
                                <ImSpoonKnife size={35} />
                            </div>
                            <h2 className='text-center text-md font-bold'>{item}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
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
    </>
}

export default page