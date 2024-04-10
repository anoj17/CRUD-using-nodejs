import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../app/redux/productSlice'

const URL = process.env.NEXT_PUBLIC_IMAGE_URL;

interface IAppProps {
    price: string,
    name: string,
    category: string,
    image: string,
    id: string
}

const ProductCategory = ({ price, name, category, image, id }: IAppProps) => {

    const dispatch = useDispatch()

    const handleScroll = (e:any) => {
        e.stopPropagation()
        dispatch(addCartItem({
            _id: id,
            name: name,
            category: category,
            price: price,
            image: image
        }))
    }
    return <>
        <div className=' bg-white shadow mb-3 drop-shadow-md rounded-lg'>
            <Link href={`/menu/${id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className='flex relative pt-4 group cursor-pointer items-center justify-center min-w-[240px] px-3 flex-col flex-wrap'>
                    <Image src={URL+image} alt='imageItem' height={150} width={150} />
                    <p className='text-center capitalize pt-2 text-gray-500 text-md'>{name}</p>
                    <h2 className='text-green-700 font-semibold'>{category}</h2>
                    <h3><span className='text-red-600 text-md'>₹</span>{price}</h3>
                </div>
            </Link >
            <div className='px-5 pb-4'>
                <button className='mt-2 w-full hover:bg-black/90 px-6 py-1 text-white bg-black '
                    onClick={handleScroll}
                >Add Cart</button>
            </div>
        </div >
    </>
}

export default ProductCategory