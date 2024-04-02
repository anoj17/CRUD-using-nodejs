import React, { useState } from 'react'
import { ImSpoonKnife } from "react-icons/im";

interface iAppProps {
    category: string,
    selectCategory: any,
    isActive: any
}

const CategoryList = ({ category, selectCategory, isActive }: iAppProps) => {

    return (
        <div className='flex flex-col cursor-pointer' onClick={selectCategory}>
            <div className={`${isActive ? 'bg-yellow-500' : "bg-yellow-600"} ' h-16 w-16 md:h-20 md:w-20 flex justify-center items-center rounded-full text-white`}>
                <ImSpoonKnife size={35} />
            </div>
            <h2 className='text-center text-md font-bold'>{category}</h2>
        </div>
    )
}

export default CategoryList