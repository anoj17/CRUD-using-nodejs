import Image from 'next/image'
import React from 'react'
import { FaM, FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteCartItem, increaseQnt, decreaseQnt } from '@/app/redux/productSlice';

const URL = process.env.NEXT_PUBLIC_IMAGE_URL;

interface iAppProps {
    name: string,
    id: string,
    image: string,
    category: string,
    price: string,
    qty: string,
    total: string
}

const CartItem = ({ name, id, image, category, price, qty, total }: iAppProps) => {
    const dispatch = useDispatch()
    return (
        <div className='md:flex-row md:space-y-3 relative py-4 md:w-[800px] w-full bg-white my-4 shadow flex flex-col items-center justify-center drop-shadow-md rounded-lg'>
            <div className='md:w-1/3 overflow-hidden'>
                <Image src={URL+image} className='hover:scale-[1.1] ml-5 transition-all' alt='imageItem' height={200} width={200} />
            </div>
            <div className=' flex space-y-2 flex-col md:items-start items-center justify-center'>
                <p className=' text-2xl capitalize pt-2 text-gray-500 text-md'>{name}</p>
                <h2 className='text-green-700 font-semibold'>{category}</h2>
                <h3><span className='text-red-600 text-md'>₹</span>{price}</h3>
                <div className='md:space-x-4 flex-col md:flex-row flex pt-3 justify-between md:space-y-0 '>
                    <div className='flex justify-center items-center'>
                        <button className='bg-gray-400' onClick={() => dispatch(increaseQnt(id))}><FaPlus size={30} /></button>
                        <p className='text-black px-4 text-center text-2xl'>{qty}</p>
                        <button className='bg-gray-400' onClick={() => dispatch(decreaseQnt(id))}><FaMinus size={30} /></button>
                    </div>
                    <div className='text-2xl md:pl-36 pt-2 text-black text-bold'>total={total}</div>
                </div>
            </div>
            <button className='text-red-600 absolute top-4 right-5 md:right-28' onClick={() => dispatch(deleteCartItem(id))}>
                <MdDelete size={30} />
            </button>
        </div>
    )
}

export default CartItem