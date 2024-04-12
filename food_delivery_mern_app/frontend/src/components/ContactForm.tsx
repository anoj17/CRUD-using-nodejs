import React from 'react'

const ContactForm = () => {
    return (
        <div className=''>
            <form className="flex flex-col w-[330px] md:w-[440px] gap-3 bg-white rounded-md shadow drop-shadow-sm px-5 md:px-10 py-3">
                <h1 className='py-2 text-2xl font-semibold text-center'>Drop us a line</h1>
                <input type="text" name="name"
                    placeholder='name'
                    className="py-2 rounded-md focus:outline-none px-2 border border-black/30 my-1" />

                <input type="email" name="email"
                    placeholder='email'
                    className="py-2 rounded-md focus:outline-none px-2 border border-black/30 my-1" />

                <input type="text" name="subject"
                    placeholder='subject'
                    className="py-2 rounded-md focus:outline-none px-2 border border-black/30 my-1" />

                <textarea rows={4} name="description" placeholder='message' className="py-1 rounded-md focus:outline-none border border-black/30 px-2 my-1"></textarea>

                <button type="submit" className="bg-gray-600 hover:bg-gray-700 py-1 my-3 rounded-sm text-white">submit</button>
            </form>
        </div>
    )
}

export default ContactForm