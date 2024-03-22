'use client'

import { usePathname } from "next/navigation"
import { Link } from "react-router-dom"

interface HeadingProps {
    path: string,
    heading: string,
    className?: string
}

const Heading = ({ path, heading, className = '' }: HeadingProps) => {
    const asPath = usePathname()

    return (
        <Link to={path} className={`${asPath == path ? 'font-semibold' : ''}`}>
            <li className={`${className} relative group`}>
                {heading}
                <span className={`${asPath == path ? 'w-full' : 'w-0'} h-[1.1px] inline-block bg-black -bottom-0.5 left-0 absolute
      group-hover:w-full transition-[width] duration-300 ease-in-out`}>&nbsp;</span>
            </li>
        </Link >
    )
}

export default Heading