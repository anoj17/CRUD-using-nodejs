import React from 'react'

interface iAppProps {
    heading1: string,
    heading2: string,
    heading3: string
}

const ContactItem = ({heading1, heading2, heading3}: iAppProps) => {
    return (
        <div className='flex flex-col p-4 gap-4 items-center justify-center'>
            <h1 className='text-2xl font-semibold'>{heading1}</h1>
            <div className='flex flex-col items-center justify-center'>
                <p>{heading2}</p>
                <p>{heading3}</p>
            </div>
        </div>
    )
}

export default ContactItem