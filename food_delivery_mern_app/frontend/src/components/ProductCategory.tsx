import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

interface IAppProps {
    price: string,
    name: string,
    category: string,
    image: string
}

const ProductCategory = ({ price, name, category, image }: IAppProps) => {
    return (
        <div className=' bg-white shadow mb-3 drop-shadow-md rounded-lg'>
            <div className='flex relative py-4 group cursor-pointer items-center justify-center min-w-[240px] px-3 flex-col flex-wrap'>
                <Image src={image} alt='imageItem' height={150} width={150} />
                <p className='text-center capitalize pt-2 text-gray-500 text-md'>{name}</p>
                <h2 className='text-green-700 font-semibold'>{category}</h2>
                <h3><span className='text-red-600 text-md'>₹</span>{price}</h3>
                <button className='mt-2 w-full hover:bg-black/90 px-6 py-1 text-white bg-black '>Add Cart</button>
                {/* <motion.div className='absolute left-0 top-0 h-full flex justify-center items-center opacity-0 w-full transition-all duration-300 ease-in-out bg-black/40 group-hover:opacity-100'
                    transition={{ duration: 300 }}
                >
                    <button className='mt-2 px-6 py-1 text-white bg-black '>Add Cart</button>
                </motion.div> */}
            </div>
        </div>
    )
}

export default ProductCategory