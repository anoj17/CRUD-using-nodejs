import Image from 'next/image'
import React from 'react'

interface IAppProps {
    price: string,
    name: string,
    category: string,
    image: string
}

const HomeItems = ({ price, name, category, image }: IAppProps) => {
    return (
        <div className='p-3 bg-white shadow drop-shadow-md rounded-lg'>
            <div className='flex flex-col items-center justify-center px-3 flex-wrap'>
                <Image src={image} alt='imageItem' height={150} width={150} />
                <p className='text-center capitalize pt-2 text-gray-500 text-md'>{name}</p>
                <h3><span className='text-red-600 text-md'>₹</span>{price}</h3>
                <h2 className='text-green-700 font-semibold'>{category}</h2>
            </div>
        </div>
    )
}

export default HomeItems