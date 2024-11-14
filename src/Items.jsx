import React from 'react'

import photo01 from './assets/photo01.jpeg'
import photo02 from './assets/photo02.jpeg'

export default function Items() {
    return (
        <div className='w-full px-[10rem] mb-2 literata-regular'>
            <div className='h-[40rem] flex'>
                <div className='w-[65%] h-full flex flex-col justify-center '>
                    <p className='text-4xl'>Exquisite Jewelry Crafted to Perfection</p>
                    <p className=''>Our master artisans bring beauty to life with every piece.</p>
                </div>

                <div className='w-[35%] h-full'>
                    <img src={photo01} className='w-full h-full object-cover rounded-t-[2rem]' />
                </div>
            </div>

            <div className='h-[20rem] flex mt-4'>
                <div className='w-[45%] h-full'>
                    <img src={photo02} className='w-full h-full object-cover rounded-l-[2rem]' />
                </div>

                <div className='w-[55%] h-full flex flex-col justify-center items-end'>
                    <p className='text-4xl'>Uncover True Beauty</p>
                    <p className=''>Handcrafted jewelry made to inspire and captivate.</p>
                </div>
            </div>
        </div>
    )
}
