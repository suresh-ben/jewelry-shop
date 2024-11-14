import React from 'react';

import conct01 from './assets/contact01.jpg'
import conct02 from './assets/contact02.jpg'
import loc from './assets/location.png'

export default function Contact() {
    return (
        <div className='w-full h-[32rem] px-[5%] mt-20 py-[3rem] flex bg-gray-100'>
            <div className='w-[30%] h-full'>
                <img src={conct01} className='w-full h-full object-cover' />
            </div>
            <div className='w-[20%] h-full bg-white relative'>
                <div className='absolute -left-[7rem] top-[50%] p-[1rem] -translate-y-[50%]'>
                    <div className='bg-white'>
                        <p className='text-2xl cormorant-garamond-medium'>Unsure Which Design To Pick?</p>
                        <p className='cormorant-garamond-medium'>Book A FREE Home Trial!</p>
                    </div>

                    <div className='flex justify-end items-end'>
                        <button
                            style={{
                                backgroundImage: 'linear-gradient(to right, #D2042D, #F7ECCB)'
                            }}
                            className='p-2 px-4 cormorant-garamond-bold mt-2 text-lg text-black hover:scale-[.98] rounedd-[.2rem]'
                        >
                            Schedule Appointment
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-[30%] h-full'>
                <img src={conct02} className='w-full h-full object-cover' />
            </div>
            <div className='w-[20%] h-full bg-white relative'>
                <div className='absolute -left-[7rem] top-[50%] p-[1rem] -translate-y-[50%]'>
                    <div className='bg-white'>
                        <p className='text-2xl cormorant-garamond-medium'>Come visit us at any of our stores!</p>
                        <p className='cormorant-garamond-medium'>There are many designs to explore.</p>
                    </div>

                    <div className='flex justify-between w-[20rem] border bg-white mt-2 p-2 rounded-[.5rem] border-[#D2042D]'>
                        <div className='flex items-center gap-1'>
                            <img src={loc} className='w-[1rem] h-[1rem] object-contain' />
                            <p className='text-xs'>Enter your pincode</p>
                        </div>

                        <p className='text-[.9rem] text-[#D2042D]'>Locate Me</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
