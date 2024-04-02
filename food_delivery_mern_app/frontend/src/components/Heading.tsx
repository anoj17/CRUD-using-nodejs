'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

interface HeadingProps {
    path: string,
    heading: string,
    className?: string,
    changeMenu: any
}

const Heading = ({ path, changeMenu, heading, className = '' }: HeadingProps) => {
    const asPath = usePathname()

    return (
        <Link href={path} className={`${asPath == path ? 'font-semibold' : ''}`}>
            <li onClick={changeMenu} className={`${className} relative group text-black`}>
                {heading}
                <span className={`${asPath == path ? 'w-full bg-red-600' : 'w-0'} h-[1.1px] inline-block md:bg-black -bottom-0.5 left-0 absolute
      group-hover:w-full transition-[width] duration-300 ease-in-out`}>&nbsp;</span>
            </li>
        </Link >
    )
}

export default Heading