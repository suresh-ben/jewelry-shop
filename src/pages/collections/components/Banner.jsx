import React from 'react'

import banner from '../../../assets/collectionsBanner.jpg'


export default function Banner() {
    return (
        <>
            <div className='relative'>
                <img src={banner} className='w-full h-[25rem] object-cover' />

                <div className='absolute top-[4rem] left-[2rem]'>
                    <p className='text-3xl cormorant-garamond-medium text-white'>Add that extra Bling to life.</p>
                </div>
            </div>

            <div className='bg-[#ffe1ec] p-4 roboto-regular'>
                <p className='roboto-medium'>New 230 Designs</p>
                <div className='flex text-xs gap-2'>
                    <p>Home</p> <p>/</p>
                    <p>Jewellery</p> <p>/</p>
                    <p>Necklaces</p> <p>/</p>
                    <p>Diamond Necklace</p>
                </div>
            </div>
        </>
    )
}
