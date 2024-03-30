import React from 'react'
import { ImSpoonKnife } from "react-icons/im";

interface iAppProps {
    category: string
}

const CategoryList = ({ category }: iAppProps) => {
    return (
        <div className='flex flex-col'>
            <div className='bg-yellow-600 p-3 rounded-full text-white'>
                <ImSpoonKnife size={35} />
            </div>
            <h2 className='text-center font-bold'>{category}</h2>
        </div>
    )
}

export default CategoryList