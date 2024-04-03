import ContactForm from '@/components/ContactForm';
import ContactItem from '@/components/ContactItem'
import React from 'react'
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const page = () => {
  return (
    <div className='py-4 bg-slate-200'>
      <div className='flex flex-col md:gap-7 md:px-9 px-9 gap-3 md:flex-row justify-around items-center'>
        <div className='flex flex-col w-full p-4 bg-white shadow backdrop-md gap-4 items-center justify-center'>
          <FaPhone size={45} className='text-red-600' />
          <ContactItem heading1='Help Center'
            heading2='+ 977-01-5902273 / + 977-01-5902274 -'
            heading3='info@anupstore.com'
          />
        </div>
        <div className='flex flex-col w-full p-4 bg-white shadow backdrop-md gap-4 items-center justify-center'>
          <FaLocationDot size={45} className='text-red-600' />
          <ContactItem heading1='Address'
            heading2='+ 977-01-5902273 / + 977-01-5902274 -'
            heading3='Kathmandu, Nepal'
          />
        </div>
        <div className='flex flex-col w-full p-4 md:px-14 bg-white shadow backdrop-md gap-4 items-center justify-center'>
          <IoIosMail size={45} className='text-red-600' />
          <ContactItem heading1='Marketing'
            heading2='+ + 977-01-5902273'
            heading3='marketing@anupstore.com'
          />
        </div>
      </div>
      <div className='w-full pt-7 flex items-center justify-center'>
        <ContactForm />
      </div>
    </div>
  )
}

export default page